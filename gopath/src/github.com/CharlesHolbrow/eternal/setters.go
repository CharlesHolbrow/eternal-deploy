package eternal

import "github.com/CharlesHolbrow/synk"

// noteDiff diff type for a character
type noteDiff struct {
  SubKey *string `json:"subKey,omitempty"`
  Number *int `json:"number,omitempty"`
  Length *int `json:"length,omitempty"`
}

// State returns a fully populated diff of the unresolved state
func (o *Note) State() interface{} {
	d := noteDiff{
    SubKey: &o.SubKey,
    Number: &o.Number,
    Length: &o.Length,
  }
  return d
}

// Resolve applies the current diff, then returns it
func (o *Note) Resolve() interface{} {
  if o.diff.SubKey != nil {o.SubKey = *o.diff.SubKey}
  if o.diff.Number != nil {o.Number = *o.diff.Number}
  if o.diff.Length != nil {o.Length = *o.diff.Length}
  diff := o.diff
  o.diff = noteDiff{}
  return diff
}

// Changed checks if struct has been changed since the last .Resolve()
func (o *Note) Changed() bool {
  return o.diff.SubKey != nil ||
		o.diff.Number != nil ||
		o.diff.Length != nil
}

// TypeKey getter for main and diff structs
func (o *Note) TypeKey() string { return "n" }
// Key getter for main object
func (o *Note) Key() string { return "n:"+o.ID }
// TypeKey getter for main and diff structs
func (o noteDiff) TypeKey() string { return "n" }
// Diff getter
func (o *Note) Diff() interface{} { return o.diff }
// Copy duplicates this object and returns an interface to it.
// The object's diff will be copied too, with the exception of the diffMap for
// array members. A diffMap is created automatically when we use array Element
// setters (ex SetDataElement). Copy() will create shallow copies of unresolved
// diffMaps. Usually we Resolve() after Copy() which means that our shallow copy
// will be safe to send over a channel.
func (o *Note) Copy() synk.Object {
	n := *o
	return &n
}
// Init (ialize) all diff fields to the current values. The next call to
// Resolve() will return a diff with all the fields initialized.
func (o *Note) Init() {
	o.diff = o.State().(noteDiff)
}
// GetID returns the ID
func (o *Note) GetID() string { return o.ID }
// SetID -- but only if it has not been set. This helps us avoid accidentally
// setting it twice. Return the item's ID either way.
func (o *Note) SetID(id string) string {
	if o.ID == "" {
		o.ID = id
	}
	return o.ID
}
// SetSubKey on diff
func (o *Note) SetSubKey(v string) {
  if v != o.SubKey {
    o.diff.SubKey = &v
  } else {
    o.diff.SubKey = nil
  }
}
// GetPrevSubKey Gets the previous value. Ignores diff.
func (o *Note) GetPrevSubKey() string { return o.SubKey }
// GetSubKey from diff. Fall back to current value if no diff
func (o *Note) GetSubKey() string {
	if o.diff.SubKey != nil {
		return *o.diff.SubKey
	}
	return o.SubKey
}
// GetSubKey. Diff method
func (o noteDiff) GetSubKey() *string { return o.SubKey }
// SetNumber on diff
func (o *Note) SetNumber(v int) {
  if v != o.Number {
    o.diff.Number = &v
  } else {
    o.diff.Number = nil
  }
}
// GetPrevNumber Gets the previous value. Ignores diff.
func (o *Note) GetPrevNumber() int { return o.Number }
// GetNumber from diff. Fall back to current value if no diff
func (o *Note) GetNumber() int {
	if o.diff.Number != nil {
		return *o.diff.Number
	}
	return o.Number
}
// GetNumber. Diff method
func (o noteDiff) GetNumber() *int { return o.Number }
// SetLength on diff
func (o *Note) SetLength(v int) {
  if v != o.Length {
    o.diff.Length = &v
  } else {
    o.diff.Length = nil
  }
}
// GetPrevLength Gets the previous value. Ignores diff.
func (o *Note) GetPrevLength() int { return o.Length }
// GetLength from diff. Fall back to current value if no diff
func (o *Note) GetLength() int {
	if o.diff.Length != nil {
		return *o.diff.Length
	}
	return o.Length
}
// GetLength. Diff method
func (o noteDiff) GetLength() *int { return o.Length }
// voiceDiff diff type for a character
type voiceDiff struct {
  SubKey *string `json:"subKey,omitempty"`
  Notes *[16]int `json:"notes,omitempty"`
  NotesDiff map[int]int `json:"notesDiff,omitempty"`
  Lengths *[16]int `json:"lengths,omitempty"`
  LengthsDiff map[int]int `json:"lengthsDiff,omitempty"`
}

// State returns a fully populated diff of the unresolved state
func (o *Voice) State() interface{} {
	d := voiceDiff{
    SubKey: &o.SubKey,
    Notes: &o.Notes,
    Lengths: &o.Lengths,
  }
  return d
}

// Resolve applies the current diff, then returns it
func (o *Voice) Resolve() interface{} {
  if o.diff.SubKey != nil {o.SubKey = *o.diff.SubKey}

	if o.diff.Notes != nil {
		o.Notes = *o.diff.Notes
	} else if o.diff.NotesDiff != nil {
		for i, v := range o.diff.NotesDiff {
			o.Notes[i] = v
		}
	}

	if o.diff.Lengths != nil {
		o.Lengths = *o.diff.Lengths
	} else if o.diff.LengthsDiff != nil {
		for i, v := range o.diff.LengthsDiff {
			o.Lengths[i] = v
		}
	}
  diff := o.diff
  o.diff = voiceDiff{}
  return diff
}

// Changed checks if struct has been changed since the last .Resolve()
func (o *Voice) Changed() bool {
  return o.diff.SubKey != nil ||
		o.diff.Notes != nil ||
		o.diff.NotesDiff != nil ||
		o.diff.Lengths != nil ||
		o.diff.LengthsDiff != nil
}

// TypeKey getter for main and diff structs
func (o *Voice) TypeKey() string { return "v" }
// Key getter for main object
func (o *Voice) Key() string { return "v:"+o.ID }
// TypeKey getter for main and diff structs
func (o voiceDiff) TypeKey() string { return "v" }
// Diff getter
func (o *Voice) Diff() interface{} { return o.diff }
// Copy duplicates this object and returns an interface to it.
// The object's diff will be copied too, with the exception of the diffMap for
// array members. A diffMap is created automatically when we use array Element
// setters (ex SetDataElement). Copy() will create shallow copies of unresolved
// diffMaps. Usually we Resolve() after Copy() which means that our shallow copy
// will be safe to send over a channel.
func (o *Voice) Copy() synk.Object {
	n := *o
	return &n
}
// Init (ialize) all diff fields to the current values. The next call to
// Resolve() will return a diff with all the fields initialized.
func (o *Voice) Init() {
	o.diff = o.State().(voiceDiff)
}
// GetID returns the ID
func (o *Voice) GetID() string { return o.ID }
// SetID -- but only if it has not been set. This helps us avoid accidentally
// setting it twice. Return the item's ID either way.
func (o *Voice) SetID(id string) string {
	if o.ID == "" {
		o.ID = id
	}
	return o.ID
}
// SetSubKey on diff
func (o *Voice) SetSubKey(v string) {
  if v != o.SubKey {
    o.diff.SubKey = &v
  } else {
    o.diff.SubKey = nil
  }
}
// GetPrevSubKey Gets the previous value. Ignores diff.
func (o *Voice) GetPrevSubKey() string { return o.SubKey }
// GetSubKey from diff. Fall back to current value if no diff
func (o *Voice) GetSubKey() string {
	if o.diff.SubKey != nil {
		return *o.diff.SubKey
	}
	return o.SubKey
}
// GetSubKey. Diff method
func (o voiceDiff) GetSubKey() *string { return o.SubKey }
// SetNotes on diff
func (o *Voice) SetNotes(v [16]int) {
  if v != o.Notes {
    o.diff.Notes = &v
  } else {
    o.diff.Notes = nil
  }
}
// GetPrevNotes Gets the previous value. Ignores diff.
func (o *Voice) GetPrevNotes() [16]int { return o.Notes }
// GetNotes from diff. Fall back to current value if no diff
func (o *Voice) GetNotes() [16]int {
	if o.diff.Notes != nil {
		return *o.diff.Notes
	}
	return o.Notes
}
// GetNotes. Diff method
func (o voiceDiff) GetNotes() *[16]int { return o.Notes }
// GetPrevNotesElement returns an element from array. Ignores diff
func (o *Voice) GetPrevNotesElement(i int) int {
	return o.Notes[i]
}
// GetNotesElement returns an element from array
func (o *Voice) GetNotesElement(i int) int {
	if o.diff.Notes != nil {
		return o.diff.Notes[i]
	}

	if o.diff.NotesDiff != nil {
		if v, ok := o.diff.NotesDiff[i]; ok {
			return v;
		}
	}
	return o.Notes[i]
}
// SetNotesElement updates a single element in the .Notes array.
// Calling this method will lazily create a map of object changes the object's
// diff member. These changes will be be applied to the .Notes array
// on the next call to Resolve(). Note that when we .Copy() a Voice, if
// there is diffMap in the diff object, the the diffMap will be shallow copied
// to the new object. Usually we Resolve() after calling Copy(), which discards
// the current .diff, so we do not need to worry about changing the shallow copy
// on the new Object.
func (o *Voice) SetNotesElement(i int, v int) {
	// fail silently if index is out of range
	if i >= len(o.Notes) { return }
	if o.diff.Notes != nil {
		o.diff.Notes[i] = v
		return
	}
	if v != o.Notes[i] {
		if o.diff.NotesDiff == nil {
			o.diff.NotesDiff = make(map[int]int)
		}
		o.diff.NotesDiff[i] = v
		return
	}
	// The new value is the same as the current value. We might need to clear
	// a value in the diff. If the diff map is empty, remove it. That way the
	// Changed() method does not have to check the length of the diffMap.
	if o.diff.NotesDiff == nil {
		return
	}
	delete(o.diff.NotesDiff, i)
	if len(o.diff.NotesDiff) == 0 {
		o.diff.NotesDiff = nil
	}
}
// GetNotesLength returns the length of the underlying array
func (o *Voice) GetNotesLength() int {
	return len(o.Notes)
}
// SetLengths on diff
func (o *Voice) SetLengths(v [16]int) {
  if v != o.Lengths {
    o.diff.Lengths = &v
  } else {
    o.diff.Lengths = nil
  }
}
// GetPrevLengths Gets the previous value. Ignores diff.
func (o *Voice) GetPrevLengths() [16]int { return o.Lengths }
// GetLengths from diff. Fall back to current value if no diff
func (o *Voice) GetLengths() [16]int {
	if o.diff.Lengths != nil {
		return *o.diff.Lengths
	}
	return o.Lengths
}
// GetLengths. Diff method
func (o voiceDiff) GetLengths() *[16]int { return o.Lengths }
// GetPrevLengthsElement returns an element from array. Ignores diff
func (o *Voice) GetPrevLengthsElement(i int) int {
	return o.Lengths[i]
}
// GetLengthsElement returns an element from array
func (o *Voice) GetLengthsElement(i int) int {
	if o.diff.Lengths != nil {
		return o.diff.Lengths[i]
	}

	if o.diff.LengthsDiff != nil {
		if v, ok := o.diff.LengthsDiff[i]; ok {
			return v;
		}
	}
	return o.Lengths[i]
}
// SetLengthsElement updates a single element in the .Lengths array.
// Calling this method will lazily create a map of object changes the object's
// diff member. These changes will be be applied to the .Lengths array
// on the next call to Resolve(). Note that when we .Copy() a Voice, if
// there is diffMap in the diff object, the the diffMap will be shallow copied
// to the new object. Usually we Resolve() after calling Copy(), which discards
// the current .diff, so we do not need to worry about changing the shallow copy
// on the new Object.
func (o *Voice) SetLengthsElement(i int, v int) {
	// fail silently if index is out of range
	if i >= len(o.Lengths) { return }
	if o.diff.Lengths != nil {
		o.diff.Lengths[i] = v
		return
	}
	if v != o.Lengths[i] {
		if o.diff.LengthsDiff == nil {
			o.diff.LengthsDiff = make(map[int]int)
		}
		o.diff.LengthsDiff[i] = v
		return
	}
	// The new value is the same as the current value. We might need to clear
	// a value in the diff. If the diff map is empty, remove it. That way the
	// Changed() method does not have to check the length of the diffMap.
	if o.diff.LengthsDiff == nil {
		return
	}
	delete(o.diff.LengthsDiff, i)
	if len(o.diff.LengthsDiff) == 0 {
		o.diff.LengthsDiff = nil
	}
}
// GetLengthsLength returns the length of the underlying array
func (o *Voice) GetLengthsLength() int {
	return len(o.Lengths)
}
