package main

import "github.com/CharlesHolbrow/eternal"

func cells() []*eternal.Cell {
	fns := []string{"mel-000.wav", "mel-001.wav", "mel-002.wav", "mel-003.wav", "mel-004.wav", "mel-005.wav", "mel-006.wav", "mel-007.wav", "mel-008.wav", "mel-009.wav", "mel-010.wav", "mel-011.wav", "mel-012.wav", "mel-013.wav", "mel-014.wav", "mel-015.wav", "mel-016.wav", "mel-017.wav", "mel-018.wav", "mel-019.wav"}
	root := "sound/m/"

	cells := make([]*eternal.Cell, 0, len(fns))
	for i, fn := range fns {
		cells = append(cells, &eternal.Cell{
			X:         i,
			Y:         -1,
			AudioPath: root + fn,
		})
	}
	return cells
}
