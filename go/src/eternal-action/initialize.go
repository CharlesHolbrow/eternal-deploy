package main

import (
	"fmt"
	"math/rand"
	"net/url"

	"github.com/CharlesHolbrow/eternal"
)

var melodyFilenames = []string{"mel-000.wav", "mel-001.wav", "mel-002.wav", "mel-003.wav", "mel-004.wav", "mel-005.wav", "mel-006.wav", "mel-007.wav", "mel-008.wav", "mel-009.wav", "mel-010.wav", "mel-011.wav", "mel-012.wav", "mel-013.wav", "mel-014.wav", "mel-015.wav", "mel-016.wav", "mel-017.wav", "mel-018.wav", "mel-019.wav"}
var lucernFilenames = []string{"005_SingingPerformance_Lucern.wav", "03-Cows.wav", "04-Cows.wav", "04-Market Texture.wav", "04-Nature.wav", "05-Child and Fountain in the Market.wav", "06-City Bells and Street Sounds - Very Nice-001.wav", "07-Child Street.wav", "07-StreamClose.wav", "099_DoorsClosingClicksAndBeeps_Lucern.wav", "107-Exaggerated Bridge 1shot.wav", "112-Exaggerated Bridge Footsteps.wav", "122-Cowbell-1shot.wav", "125-Cowbell-1shot.wav", "1C-LucerneOrchestraSession-August26-2014_tense.wav", "bridgeWalk2_seagulls_2.wav", "bridge_walk2_seagull_2.wav", "crew_creaky_2.wav", "crew_hardPulls_1.wav", "crew_heavyPulls_calmInstructions.wav", "crew_quickPulls.wav", "day#5_bell_water_1.wav", "day#5_bell_water_7.wav", "day#5_boat_docking_5.wav", "day#5_boat_horn.wav", "day#5_boat_waterWheel2_1.wav", "day#5_passingCar_windy_1.wav", "day#5_waterLapping.wav", "exploringRainy_flag_umbrella_.wav", "exploringRainy_rollingSuitcase.wav", "exploring_steps_humming.wav", "exploring_waterClose_color2.wav", "exploring_waterClose_subside_1.wav", "exploring_water_metalKnocks_1.wav", "kkl_duetVocal.wav", "organTour_creakySteps_1.wav", "organTour_intro.wav", "organTour_murmurs_breathing.wav", "organ_arpeggio_13.wav", "organ_pedalBuilding.wav", "organ_softResolution.wav", "streetStudio_convo1_skateboard.wav"}

func prefixFileNames(prefix string, filenames []string) []string {
	output := make([]string, len(filenames))
	for i, fn := range filenames {
		t := &url.URL{Path: prefix + fn}
		output[i] = t.String()
	}
	return output
}

func cells() []*eternal.Cell {

	melodyPaths := prefixFileNames("sound/m/", melodyFilenames)
	lucernPaths := prefixFileNames("sound/l/selection/", lucernFilenames)
	usedPositions := make(map[string]bool)

	usePosition := func(x, y int) {
		name := fmt.Sprintf("%d,%d", x, y)
		usedPositions[name] = true
	}

	getPosition := func() (x, y int) { // Is the spot available?
		for {
			x = rand.Intn(16) - 8
			y = rand.Intn(16) - 8

			name := fmt.Sprintf("%d,%d", x, y)
			if !usedPositions[name] {
				usedPositions[name] = true
				return x, y
			}
		}
	}

	rand.Seed(4)

	mCells := make([]*eternal.Cell, len(melodyPaths))
	hue := float32(0.1)
	for i, fn := range melodyPaths {
		usePosition(i, 0)

		mCells[i] = &eternal.Cell{
			X:         i - 10,
			Y:         0,
			AudioPath: fn,
			Hue:       hue,
		}
		hue += 0.05
	}

	lCells := make([]*eternal.Cell, len(lucernPaths))
	for i, fn := range lucernPaths {
		x, y := getPosition()

		lCells[i] = &eternal.Cell{
			X:         x,
			Y:         y,
			AudioPath: fn,
			Hue:       rand.Float32(),
		}
	}
	return append(mCells, lCells...)
}
