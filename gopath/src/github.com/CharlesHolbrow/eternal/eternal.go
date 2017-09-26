package eternal

// Voice represents a sequence of notes
//@PA:v
type Voice struct {
	ID      string  `json:"id"`
	SubKey  string  `json:"subKey"`
	Notes   [16]int `json:"notes"`
	Lengths [16]int `json:"lengths"`
	diff    voiceDiff
}
