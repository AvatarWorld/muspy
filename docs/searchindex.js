Search.setIndex({docnames:["classes/annotation","classes/chord","classes/index","classes/key-signature","classes/lyric","classes/metadata","classes/music","classes/note","classes/tempo","classes/time-signature","classes/track","datasets","doc/classes","doc/core","doc/datasets","doc/index","doc/inputs","doc/metrics","doc/music","doc/muspy","doc/outputs","doc/processors","doc/schemas","doc/visualization","example","getting_started","index","io","metrics","representations","timing","visualization"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["classes/annotation.rst","classes/chord.rst","classes/index.rst","classes/key-signature.rst","classes/lyric.rst","classes/metadata.rst","classes/music.rst","classes/note.rst","classes/tempo.rst","classes/time-signature.rst","classes/track.rst","datasets.rst","doc/classes.rst","doc/core.rst","doc/datasets.rst","doc/index.rst","doc/inputs.rst","doc/metrics.rst","doc/music.rst","doc/muspy.rst","doc/outputs.rst","doc/processors.rst","doc/schemas.rst","doc/visualization.rst","example.rst","getting_started.rst","index.rst","io.rst","metrics.rst","representations.rst","timing.rst","visualization.rst"],objects:{"":{muspy:[19,0,0,"-"]},"muspy.ABCFolderDataset":{on_the_fly:[19,2,1,""],read:[19,2,1,""]},"muspy.Annotation":{annotation:[19,3,1,""],group:[19,3,1,""],time:[19,3,1,""]},"muspy.Base":{adjust_time:[19,2,1,""],from_dict:[19,2,1,""],is_type_valid:[19,2,1,""],is_valid:[19,2,1,""],pretty_str:[19,2,1,""],print:[19,2,1,""],to_ordered_dict:[19,2,1,""],validate:[19,2,1,""],validate_type:[19,2,1,""]},"muspy.Chord":{clip:[19,2,1,""],duration:[19,3,1,""],end:[19,2,1,""],pitches:[19,3,1,""],start:[19,2,1,""],time:[19,3,1,""],transpose:[19,2,1,""],velocity:[19,3,1,""]},"muspy.ComplexBase":{append:[19,2,1,""],remove_duplicate:[19,2,1,""],remove_invalid:[19,2,1,""],sort:[19,2,1,""]},"muspy.Dataset":{cite:[19,2,1,""],info:[19,2,1,""],save:[19,2,1,""],split:[19,2,1,""],to_pytorch_dataset:[19,2,1,""],to_tensorflow_dataset:[19,2,1,""]},"muspy.EventRepresentationProcessor":{decode:[19,2,1,""],default_velocity:[19,3,1,""],encode:[19,2,1,""],force_velocity_event:[19,3,1,""],max_time_shift:[19,3,1,""],use_end_of_sequence_event:[19,3,1,""],use_single_note_off_event:[19,3,1,""],velocity_bins:[19,3,1,""]},"muspy.FolderDataset":{convert:[19,2,1,""],converted_dir:[19,2,1,""],converted_exists:[19,2,1,""],exists:[19,2,1,""],load:[19,2,1,""],on_the_fly:[19,2,1,""],read:[19,2,1,""],root:[19,3,1,""],use_converted:[19,2,1,""]},"muspy.HymnalDataset":{download:[19,2,1,""],read:[19,2,1,""]},"muspy.HymnalTuneDataset":{download:[19,2,1,""],read:[19,2,1,""]},"muspy.JSBChoralesDataset":{read:[19,2,1,""]},"muspy.KeySignature":{fifths:[19,3,1,""],mode:[19,3,1,""],root:[19,3,1,""],root_str:[19,3,1,""],time:[19,3,1,""]},"muspy.LakhMIDIDataset":{read:[19,2,1,""]},"muspy.Lyric":{lyric:[19,3,1,""],time:[19,3,1,""]},"muspy.MAESTRODatasetV1":{read:[19,2,1,""]},"muspy.MAESTRODatasetV2":{read:[19,2,1,""]},"muspy.Metadata":{collection:[19,3,1,""],copyright:[19,3,1,""],creators:[19,3,1,""],schema_version:[19,3,1,""],source_filename:[19,3,1,""],source_format:[19,3,1,""],title:[19,3,1,""]},"muspy.Music":{adjust_resolution:[19,2,1,""],annotations:[19,3,1,""],clip:[19,2,1,""],downbeats:[19,3,1,""],get_end_time:[19,2,1,""],key_signatures:[19,3,1,""],lyrics:[19,3,1,""],metadata:[19,3,1,""],resolution:[19,3,1,""],save:[19,2,1,""],save_json:[19,2,1,""],save_yaml:[19,2,1,""],show:[19,2,1,""],show_pianoroll:[19,2,1,""],show_score:[19,2,1,""],tempos:[19,3,1,""],time_signatures:[19,3,1,""],to_event_representation:[19,2,1,""],to_monotoken_representation:[19,2,1,""],to_music21:[19,2,1,""],to_note_representation:[19,2,1,""],to_object:[19,2,1,""],to_pianoroll_representation:[19,2,1,""],to_polytoken_representation:[19,2,1,""],to_pretty_midi:[19,2,1,""],to_pypianoroll:[19,2,1,""],to_representation:[19,2,1,""],tracks:[19,3,1,""],transpose:[19,2,1,""],write:[19,2,1,""],write_midi:[19,2,1,""],write_musicxml:[19,2,1,""]},"muspy.Music21Dataset":{convert:[19,2,1,""]},"muspy.MusicDataset":{kind:[19,3,1,""],root:[19,3,1,""]},"muspy.NESMusicDatabase":{read:[19,2,1,""]},"muspy.Note":{clip:[19,2,1,""],duration:[19,3,1,""],end:[19,2,1,""],pitch:[19,3,1,""],start:[19,2,1,""],time:[19,3,1,""],transpose:[19,2,1,""],velocity:[19,3,1,""]},"muspy.NoteRepresentationProcessor":{decode:[19,2,1,""],default_velocity:[19,3,1,""],encode:[19,2,1,""],encode_velocity:[19,3,1,""],use_start_end:[19,3,1,""]},"muspy.PianoRollRepresentationProcessor":{decode:[19,2,1,""],default_velocity:[19,3,1,""],encode:[19,2,1,""],encode_velocity:[19,3,1,""]},"muspy.PitchRepresentationProcessor":{decode:[19,2,1,""],default_velocity:[19,3,1,""],encode:[19,2,1,""],use_hold_state:[19,3,1,""]},"muspy.RemoteDataset":{download:[19,2,1,""],download_and_extract:[19,2,1,""],exists:[19,2,1,""],extract:[19,2,1,""],root:[19,3,1,""],source_exists:[19,2,1,""]},"muspy.RemoteFolderDataset":{read:[19,2,1,""],root:[19,3,1,""]},"muspy.RemoteMusicDataset":{kind:[19,3,1,""],root:[19,3,1,""]},"muspy.ScorePlotter":{adjust_fonts:[19,2,1,""],axes:[19,3,1,""],fig:[19,3,1,""],note_spacing:[19,3,1,""],plot_bar_line:[19,2,1,""],plot_clef:[19,2,1,""],plot_final_bar_line:[19,2,1,""],plot_key_signature:[19,2,1,""],plot_note:[19,2,1,""],plot_object:[19,2,1,""],plot_staffs:[19,2,1,""],plot_tempo:[19,2,1,""],plot_time_signature:[19,2,1,""],resolution:[19,3,1,""],set_baseline:[19,2,1,""],update_boundaries:[19,2,1,""]},"muspy.Tempo":{qpm:[19,3,1,""],time:[19,3,1,""]},"muspy.TimeSignature":{denominator:[19,3,1,""],numerator:[19,3,1,""],time:[19,3,1,""]},"muspy.Track":{annotations:[19,3,1,""],chords:[19,3,1,""],clip:[19,2,1,""],get_end_time:[19,2,1,""],is_drum:[19,3,1,""],lyrics:[19,3,1,""],name:[19,3,1,""],notes:[19,3,1,""],program:[19,3,1,""],transpose:[19,2,1,""],validate:[19,2,1,""]},"muspy.WikifoniaDataset":{read:[19,2,1,""]},"muspy.classes":{Annotation:[12,1,1,""],Chord:[12,1,1,""],KeySignature:[12,1,1,""],Lyric:[12,1,1,""],Metadata:[12,1,1,""],Note:[12,1,1,""],Tempo:[12,1,1,""],TimeSignature:[12,1,1,""],Track:[12,1,1,""]},"muspy.classes.Annotation":{annotation:[12,3,1,""],group:[12,3,1,""],time:[12,3,1,""]},"muspy.classes.Chord":{clip:[12,2,1,""],duration:[12,3,1,""],end:[12,2,1,""],pitches:[12,3,1,""],start:[12,2,1,""],time:[12,3,1,""],transpose:[12,2,1,""],velocity:[12,3,1,""]},"muspy.classes.KeySignature":{fifths:[12,3,1,""],mode:[12,3,1,""],root:[12,3,1,""],root_str:[12,3,1,""],time:[12,3,1,""]},"muspy.classes.Lyric":{lyric:[12,3,1,""],time:[12,3,1,""]},"muspy.classes.Metadata":{collection:[12,3,1,""],copyright:[12,3,1,""],creators:[12,3,1,""],schema_version:[12,3,1,""],source_filename:[12,3,1,""],source_format:[12,3,1,""],title:[12,3,1,""]},"muspy.classes.Note":{clip:[12,2,1,""],duration:[12,3,1,""],end:[12,2,1,""],pitch:[12,3,1,""],start:[12,2,1,""],time:[12,3,1,""],transpose:[12,2,1,""],velocity:[12,3,1,""]},"muspy.classes.Tempo":{qpm:[12,3,1,""],time:[12,3,1,""]},"muspy.classes.TimeSignature":{denominator:[12,3,1,""],numerator:[12,3,1,""],time:[12,3,1,""]},"muspy.classes.Track":{annotations:[12,3,1,""],chords:[12,3,1,""],clip:[12,2,1,""],get_end_time:[12,2,1,""],is_drum:[12,3,1,""],lyrics:[12,3,1,""],name:[12,3,1,""],notes:[12,3,1,""],program:[12,3,1,""],transpose:[12,2,1,""],validate:[12,2,1,""]},"muspy.core":{adjust_resolution:[13,5,1,""],adjust_time:[13,5,1,""],append:[13,5,1,""],clip:[13,5,1,""],remove_duplicate_changes:[13,5,1,""],sort:[13,5,1,""],to_ordered_dict:[13,5,1,""],transpose:[13,5,1,""]},"muspy.datasets":{ABCFolderDataset:[14,1,1,""],Dataset:[14,1,1,""],DatasetInfo:[14,1,1,""],EssenFolkSongDatabase:[14,1,1,""],FolderDataset:[14,1,1,""],HymnalDataset:[14,1,1,""],HymnalTuneDataset:[14,1,1,""],JSBChoralesDataset:[14,1,1,""],LakhMIDIDataset:[14,1,1,""],MAESTRODatasetV1:[14,1,1,""],MAESTRODatasetV2:[14,1,1,""],Music21Dataset:[14,1,1,""],MusicDataset:[14,1,1,""],NESMusicDatabase:[14,1,1,""],NottinghamDatabase:[14,1,1,""],RemoteABCFolderDataset:[14,1,1,""],RemoteDataset:[14,1,1,""],RemoteFolderDataset:[14,1,1,""],RemoteMusicDataset:[14,1,1,""],WikifoniaDataset:[14,1,1,""]},"muspy.datasets.ABCFolderDataset":{on_the_fly:[14,2,1,""],read:[14,2,1,""]},"muspy.datasets.Dataset":{cite:[14,2,1,""],info:[14,2,1,""],save:[14,2,1,""],split:[14,2,1,""],to_pytorch_dataset:[14,2,1,""],to_tensorflow_dataset:[14,2,1,""]},"muspy.datasets.FolderDataset":{convert:[14,2,1,""],converted_dir:[14,2,1,""],converted_exists:[14,2,1,""],exists:[14,2,1,""],load:[14,2,1,""],on_the_fly:[14,2,1,""],read:[14,2,1,""],root:[14,3,1,""],use_converted:[14,2,1,""]},"muspy.datasets.HymnalDataset":{download:[14,2,1,""],read:[14,2,1,""]},"muspy.datasets.HymnalTuneDataset":{download:[14,2,1,""],read:[14,2,1,""]},"muspy.datasets.JSBChoralesDataset":{read:[14,2,1,""]},"muspy.datasets.LakhMIDIDataset":{read:[14,2,1,""]},"muspy.datasets.MAESTRODatasetV1":{read:[14,2,1,""]},"muspy.datasets.MAESTRODatasetV2":{read:[14,2,1,""]},"muspy.datasets.Music21Dataset":{convert:[14,2,1,""]},"muspy.datasets.MusicDataset":{kind:[14,3,1,""],root:[14,3,1,""]},"muspy.datasets.NESMusicDatabase":{read:[14,2,1,""]},"muspy.datasets.RemoteDataset":{download:[14,2,1,""],download_and_extract:[14,2,1,""],exists:[14,2,1,""],extract:[14,2,1,""],root:[14,3,1,""],source_exists:[14,2,1,""]},"muspy.datasets.RemoteFolderDataset":{read:[14,2,1,""],root:[14,3,1,""]},"muspy.datasets.RemoteMusicDataset":{kind:[14,3,1,""],root:[14,3,1,""]},"muspy.datasets.WikifoniaDataset":{read:[14,2,1,""]},"muspy.inputs":{MIDIError:[16,4,1,""],MusicXMLError:[16,4,1,""],from_event_representation:[16,5,1,""],from_music21:[16,5,1,""],from_music21_opus:[16,5,1,""],from_note_representation:[16,5,1,""],from_object:[16,5,1,""],from_pianoroll_representation:[16,5,1,""],from_pitch_representation:[16,5,1,""],from_pretty_midi:[16,5,1,""],from_pypianoroll:[16,5,1,""],from_representation:[16,5,1,""],load:[16,5,1,""],load_json:[16,5,1,""],load_yaml:[16,5,1,""],read:[16,5,1,""],read_abc:[16,5,1,""],read_abc_string:[16,5,1,""],read_midi:[16,5,1,""],read_musicxml:[16,5,1,""]},"muspy.metrics":{drum_in_pattern_rate:[17,5,1,""],drum_pattern_consistency:[17,5,1,""],empty_beat_rate:[17,5,1,""],empty_measure_rate:[17,5,1,""],groove_consistency:[17,5,1,""],n_pitch_classes_used:[17,5,1,""],n_pitches_used:[17,5,1,""],pitch_class_entropy:[17,5,1,""],pitch_entropy:[17,5,1,""],pitch_in_scale_rate:[17,5,1,""],pitch_range:[17,5,1,""],polyphony:[17,5,1,""],polyphony_rate:[17,5,1,""],scale_consistency:[17,5,1,""]},"muspy.music":{Music:[18,1,1,""]},"muspy.music.Music":{adjust_resolution:[18,2,1,""],annotations:[18,3,1,""],clip:[18,2,1,""],downbeats:[18,3,1,""],get_end_time:[18,2,1,""],key_signatures:[18,3,1,""],lyrics:[18,3,1,""],metadata:[18,3,1,""],resolution:[18,3,1,""],save:[18,2,1,""],save_json:[18,2,1,""],save_yaml:[18,2,1,""],show:[18,2,1,""],show_pianoroll:[18,2,1,""],show_score:[18,2,1,""],tempos:[18,3,1,""],time_signatures:[18,3,1,""],to_event_representation:[18,2,1,""],to_monotoken_representation:[18,2,1,""],to_music21:[18,2,1,""],to_note_representation:[18,2,1,""],to_object:[18,2,1,""],to_pianoroll_representation:[18,2,1,""],to_polytoken_representation:[18,2,1,""],to_pretty_midi:[18,2,1,""],to_pypianoroll:[18,2,1,""],to_representation:[18,2,1,""],tracks:[18,3,1,""],transpose:[18,2,1,""],write:[18,2,1,""],write_midi:[18,2,1,""],write_musicxml:[18,2,1,""]},"muspy.outputs":{save:[20,5,1,""],save_json:[20,5,1,""],save_yaml:[20,5,1,""],to_event_representation:[20,5,1,""],to_music21:[20,5,1,""],to_note_representation:[20,5,1,""],to_object:[20,5,1,""],to_pianoroll_representation:[20,5,1,""],to_pitch_representation:[20,5,1,""],to_pretty_midi:[20,5,1,""],to_pypianoroll:[20,5,1,""],to_representation:[20,5,1,""],write:[20,5,1,""],write_midi:[20,5,1,""],write_musicxml:[20,5,1,""]},"muspy.processors":{EventRepresentationProcessor:[21,1,1,""],NoteRepresentationProcessor:[21,1,1,""],PianoRollRepresentationProcessor:[21,1,1,""],PitchRepresentationProcessor:[21,1,1,""]},"muspy.processors.EventRepresentationProcessor":{decode:[21,2,1,""],default_velocity:[21,3,1,""],encode:[21,2,1,""],force_velocity_event:[21,3,1,""],max_time_shift:[21,3,1,""],use_end_of_sequence_event:[21,3,1,""],use_single_note_off_event:[21,3,1,""],velocity_bins:[21,3,1,""]},"muspy.processors.NoteRepresentationProcessor":{decode:[21,2,1,""],default_velocity:[21,3,1,""],encode:[21,2,1,""],encode_velocity:[21,3,1,""],use_start_end:[21,3,1,""]},"muspy.processors.PianoRollRepresentationProcessor":{decode:[21,2,1,""],default_velocity:[21,3,1,""],encode:[21,2,1,""],encode_velocity:[21,3,1,""]},"muspy.processors.PitchRepresentationProcessor":{decode:[21,2,1,""],default_velocity:[21,3,1,""],encode:[21,2,1,""],use_hold_state:[21,3,1,""]},"muspy.schemas":{get_json_schema_path:[22,5,1,""],get_musicxml_schema_path:[22,5,1,""],get_yaml_schema_path:[22,5,1,""]},"muspy.visualization":{ScorePlotter:[23,1,1,""],show:[23,5,1,""],show_pianoroll:[23,5,1,""],show_score:[23,5,1,""]},"muspy.visualization.ScorePlotter":{adjust_fonts:[23,2,1,""],axes:[23,3,1,""],fig:[23,3,1,""],note_spacing:[23,3,1,""],plot_bar_line:[23,2,1,""],plot_clef:[23,2,1,""],plot_final_bar_line:[23,2,1,""],plot_key_signature:[23,2,1,""],plot_note:[23,2,1,""],plot_object:[23,2,1,""],plot_staffs:[23,2,1,""],plot_tempo:[23,2,1,""],plot_time_signature:[23,2,1,""],resolution:[23,3,1,""],set_baseline:[23,2,1,""],update_boundaries:[23,2,1,""]},muspy:{ABCFolderDataset:[19,1,1,""],Annotation:[19,1,1,""],Base:[19,1,1,""],Chord:[19,1,1,""],ComplexBase:[19,1,1,""],Dataset:[19,1,1,""],DatasetInfo:[19,1,1,""],EssenFolkSongDatabase:[19,1,1,""],EventRepresentationProcessor:[19,1,1,""],FolderDataset:[19,1,1,""],HymnalDataset:[19,1,1,""],HymnalTuneDataset:[19,1,1,""],JSBChoralesDataset:[19,1,1,""],KeySignature:[19,1,1,""],LakhMIDIDataset:[19,1,1,""],Lyric:[19,1,1,""],MAESTRODatasetV1:[19,1,1,""],MAESTRODatasetV2:[19,1,1,""],MIDIError:[19,4,1,""],Metadata:[19,1,1,""],Music21Dataset:[19,1,1,""],Music:[19,1,1,""],MusicDataset:[19,1,1,""],MusicXMLError:[19,4,1,""],NESMusicDatabase:[19,1,1,""],Note:[19,1,1,""],NoteRepresentationProcessor:[19,1,1,""],NottinghamDatabase:[19,1,1,""],PianoRollRepresentationProcessor:[19,1,1,""],PitchRepresentationProcessor:[19,1,1,""],RemoteABCFolderDataset:[19,1,1,""],RemoteDataset:[19,1,1,""],RemoteFolderDataset:[19,1,1,""],RemoteMusicDataset:[19,1,1,""],ScorePlotter:[19,1,1,""],Tempo:[19,1,1,""],TimeSignature:[19,1,1,""],Track:[19,1,1,""],WikifoniaDataset:[19,1,1,""],adjust_resolution:[19,5,1,""],adjust_time:[19,5,1,""],append:[19,5,1,""],classes:[12,0,0,"-"],clip:[19,5,1,""],core:[13,0,0,"-"],datasets:[14,0,0,"-"],drum_in_pattern_rate:[19,5,1,""],drum_pattern_consistency:[19,5,1,""],empty_beat_rate:[19,5,1,""],empty_measure_rate:[19,5,1,""],from_event_representation:[19,5,1,""],from_music21:[19,5,1,""],from_music21_opus:[19,5,1,""],from_note_representation:[19,5,1,""],from_object:[19,5,1,""],from_pianoroll_representation:[19,5,1,""],from_pitch_representation:[19,5,1,""],from_pretty_midi:[19,5,1,""],from_pypianoroll:[19,5,1,""],from_representation:[19,5,1,""],get_json_schema_path:[19,5,1,""],get_musicxml_schema_path:[19,5,1,""],get_yaml_schema_path:[19,5,1,""],groove_consistency:[19,5,1,""],inputs:[16,0,0,"-"],load:[19,5,1,""],load_json:[19,5,1,""],load_yaml:[19,5,1,""],metrics:[17,0,0,"-"],music:[18,0,0,"-"],n_pitch_classes_used:[19,5,1,""],n_pitches_used:[19,5,1,""],outputs:[20,0,0,"-"],pitch_class_entropy:[19,5,1,""],pitch_entropy:[19,5,1,""],pitch_in_scale_rate:[19,5,1,""],pitch_range:[19,5,1,""],polyphony:[19,5,1,""],polyphony_rate:[19,5,1,""],processors:[21,0,0,"-"],read:[19,5,1,""],read_abc:[19,5,1,""],read_abc_string:[19,5,1,""],read_midi:[19,5,1,""],read_musicxml:[19,5,1,""],remove_duplicate_changes:[19,5,1,""],save:[19,5,1,""],save_json:[19,5,1,""],save_yaml:[19,5,1,""],scale_consistency:[19,5,1,""],schemas:[22,0,0,"-"],show:[19,5,1,""],show_pianoroll:[19,5,1,""],show_score:[19,5,1,""],sort:[19,5,1,""],to_event_representation:[19,5,1,""],to_music21:[19,5,1,""],to_note_representation:[19,5,1,""],to_object:[19,5,1,""],to_ordered_dict:[19,5,1,""],to_pianoroll_representation:[19,5,1,""],to_pitch_representation:[19,5,1,""],to_pretty_midi:[19,5,1,""],to_pypianoroll:[19,5,1,""],to_representation:[19,5,1,""],transpose:[19,5,1,""],visualization:[23,0,0,"-"],write:[19,5,1,""],write_midi:[19,5,1,""],write_musicxml:[19,5,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:function"},terms:{"18th":[17,19,28],"21st":[17,19,26,28],"32nd":[17,19,28],"boolean":[2,12,16,19,21,29],"break":[17,19,28],"class":[14,15,16,17,18,19,20,21,23,26,28],"default":[0,1,3,4,5,6,7,8,9,10,11,12,13,14,16,18,19,20,21,23,29,30,31],"float":[8,12,13,14,17,18,19,23,28,31],"function":[13,14,16,19,22,23,27],"import":11,"int":[0,1,3,4,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,23,28,29,31],"new":[13,19],"null":24,"return":[2,11,12,13,14,16,17,18,19,20,21,22,23,28,29,31],"true":[11,14,16,19,20,21,29],"while":[12,13,16,18,19,26],Axes:[19,23,31],For:[0,13,14,18,19,20,21,26,29,30],NES:[11,14,19],That:[12,18,19,30],The:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,17,19,20,21,28,29,30,31],These:[12,15,17,27,28,30],Will:[16,19,21,29],__getitem__:[11,14,19],__len__:[11,14,19],__repr__:19,_are:[17,19,28],_at:[17,19,28],_attribut:19,_beat:[17,19,28],_class:[17,19,28],_consist:[17,19,28],_convert:[11,14,19],_entropi:[17,19,28],_extens:[11,14,19],_in:[17,19,28],_info:[11,14,19],_is:[17,19,28],_least:[17,19,28],_list_attribut:19,_measur:[17,19,28],_multipl:[17,19,28],_note:[17,19,28],_on:[17,19,28],_one:[17,19,28],_optional_attribut:19,_pattern:[17,19,28],_pitch:[17,19,28],_rate:[17,19,28],_scale:[17,19,28],_sourc:[11,14,19],_step:[17,19,28],_time:30,_when:[17,19,28],_where:[17,19,28],aaai:[17,19,28],abc:[11,14,16,19,26,27],abcfolderdataset:[11,14,19],abil:30,about:[14,19],absolut:30,accept:[12,16,19,29],accompani:[17,19,28],accord:[12,16,19,29],acoust:[12,16,19,29],across:26,activ:[16,19,20,21,29],add:[19,20,21,29],addit:[11,14,19,30],adjust:[2,13,18,19,23],adjust_font:[19,23],adjust_resolut:[13,18,19],adjust_tim:[2,13,19],adversari:[17,19,28],all:[2,11,12,13,14,16,17,18,19,20,21,28,29],allow:19,along:[13,19],also:[2,11,14,17,19,28],alto:[19,23,31],ani:[0,12,19,20],annot:[2,6,10,12,13,18,19,20,24,26],anoth:25,append:[2,13,16,19,20,21,29],appli:[12,13,14,19],archiv:[11,14,19],argument:[16,19],arrai:[14,16,19,20,21,29],array_lik:[14,19],artifici:[17,19,28],assum:[18,19],asterisk:11,attr:[12,19],attr_1:19,attr_2:19,attribut:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,18,19,30],audio:[19,26],automat:[11,14,19],avail:[6,11,14,16,18,19,27],averag:[17,19,28],axes:[19,23,31],bach:[14,19],backend:[16,19,20,31],bar:[19,23],base:[10,12,13,14,16,18,19,20,21,26],baselin:[19,23],bass:[19,23,31],beat:[6,17,19,28,30],been:[16,19,26],beethoven:24,befor:[19,20,21,29],being:[11,14,17,19,28],below:[11,13,14,19],berg:26,better:[12,19],between:[2,17,19,27,28,30],bin:[16,19,20,21,29],binari:[17,19,20,21,28,29],bool:[10,11,12,14,16,18,19,20,21,29],both:[19,31],bottom:[19,23],bound:[12,13,18,19],boundari:[19,23],bravura:31,build:[11,14,19,26],built:[11,14,19],call:[17,19,28],callabl:[11,13,14,19],can:[0,1,7,11,13,14,16,18,19,20,21,26,27,29],cast:[16,19,21,29],certain:[2,12,17,18,19,28],chang:[6,13,18,19,20,21,29],check:[11,14,19],checksum:[11,14,19],chen:26,chia:[17,19,28],choral:[11,14,19],chord:[2,10,11,12,19,26],citat:[14,19],cite:[14,19],class_nam:19,classic:11,classmethod:[14,19],cleanup:[11,14,19],clef:[19,23,31],clef_octav:[19,23,31],clip:[12,13,18,19],close:[16,19,20,21,29],close_al:[16,19],collect:[5,12,14,19,24,26],column:[19,21],com:[11,14,19,26],come:[11,14],common:[16,17,18,19,20,26,27,29,30],commonli:[16,19,20,26],compar:[17,28],comparison:29,compat:[19,20,21,29],complexbas:[19,26],compon:26,compos:[14,17,19,28],compress:[16,19,20],comput:[13,17,19,28],concurr:[11,14,19],confer:[17,19,26,28],configur:[19,20,21,23,29,31],consid:[17,19,28],consist:[17,19,26,28],constant:[17,19,28],construct:[17,18,19,28],contain:[0,1,2,3,4,5,6,7,8,9,10,11,12,14,18,19],content:[2,19],continu:[17,19,28],convers:[11,14,16,19,20,21,27,29],convert:[2,11,13,14,16,18,19,20],converted_dir:[14,19],converted_exist:[11,14,19],coordin:[19,23],copyright:[5,12,19,24],core:[6,15,18,19,26],corpu:[11,14,19],correct:19,corresepond:[13,19],correspod:[16,19],correspond:[2,19],corrupt:[11,14,19],could:[17,26,28],count:[17,19,28],creat:[2,11,14,19],creation:26,creator:[5,12,19,24],current:[19,20,21,29,30],custom:[11,14,19,26],data:[0,2,11,14,16,17,19,20,25,26,28],data_str:[16,19],databas:[11,14,19],dataset:[15,19,26],datasetinfo:[11,14,19],deal:[16,19,26],decid:[16,19],decod:[16,19,21,29],decompos:[16,19,20,21,29],default_resolut:[6,16,18,19,29],default_veloc:[12,16,19,21,29],defin:[17,19,28],demo:[17,19,28],denomin:[9,12,19,23,24],denot:29,depend:[11,14,19,30],descript:[0,1,3,4,5,6,7,8,9,10,14,19],desir:[14,19],detail:[11,14,15,19,26],determin:30,develop:19,dict:[14,16,19],dict_:19,dictionari:[2,11,14,18,19],differ:[2,17,19,20,21,28,29],dimens:[19,20,21,29],directori:[11,14,19],disabl:[11,14,19],discard:[19,20,21,29],distanc:[17,19,28],divis:30,do_someth:11,doc:[14,19],docment:[11,14,19],document:[11,14,18,19],doe:[11,14,19],dong:[17,19,26,28],doubl:[13,18,19],downbeat:[6,18,19,24],download:[11,14,19,26],download_and_extract:[11,14,19],drum:[10,17,19,28],drum_in_pattern_r:[17,19,28],drum_pattern_consist:[17,19,28],dupl:[17,19,28],duplic:[2,13,16,19],duplicate_note_mod:[16,19],durat:[1,7,12,16,19,20,21,23,24,29],each:[10,11,12,13,14,18,19,26],earliest:[16,19],easi:[11,14,26],edu:[14,19],effort:26,element:6,elis:24,empti:[12,17,19,28],empty_beat_r:[17,19,28],empty_measure_r:[17,19,28],enabl:[11,14,19],encod:[16,19,20,21,29],encode_veloc:[16,19,20,21,29],end:[1,7,12,16,18,19,20,21,23,29],entropi:[17,19,28],equal:[11,14,19],equival:[12,14,18,19],error:[11,12,14,16,19],essen:[11,14,19],essenfolksongdatabas:[14,19],essenti:19,etc:[4,12,19],evalu:[17,19,26,28],event:[12,13,14,16,18,19,20,21,26],eventrepresentationprocessor:[19,21],everi:[19,20,21,29],exampl:[6,11,13,14,18,19,20,21,26,27,29],except:[16,19],exist:[11,14,19],expect:[11,14,19],explor:[17,19,28],extend:[11,14,19],extens:[11,14,16,19,20],extract:[11,14,19],factor:[13,18,19,23,30,31],factori:[14,19],fail:[11,14,19],fals:[10,11,12,14,16,18,19,20,21,24,29],field:[16,19],fifo:[16,19],fifth:[12,19],fig:[19,23,31],figsiz:[19,23,31],figur:[19,23,31],file:[5,6,11,12,14,16,18,19,20,27,30],filenam:[11,14,19,20],finetun:[19,23,31],first:[16,19,23],flat:[12,19],flexibl:[0,31],fly:[11,14,19],folder:[11,14,19],folderdataset:[11,14,19],folk:[11,14,19],follow:[2,11,14,18,19,26,28,30],font:[19,23,31],font_scal:[19,23,31],forc:[11,14,19],force_velocity_ev:[19,20,21,29],form:19,format:[2,5,11,12,14,16,18,19,20,24,26,27],formula:[13,18,19,30],found:[14,17,19,28,30],frac:[17,19,28,30],from:[2,11,12,13,14,16,18,19,20,21,26,27,29],from_dict:[2,18,19],from_event_represent:[16,19,29],from_mido:27,from_music21:[16,19,27],from_music21_opu:[16,19],from_note_represent:[16,19,29],from_object:[16,18,19],from_pianoroll_represent:[16,19,29],from_pitch_represent:[16,19,29],from_pretty_midi:[16,19,27],from_pypianorol:[16,19,27],from_represent:[16,19],front:[17,19,28],full:[14,18,19],func:[13,19],fur:24,g_i:[17,19,28],game:11,gan:[17,19,28],gener:[10,12,16,17,19,20,26,28,29],genr:11,get:26,get_end_tim:[12,18,19],get_json_schema_path:[19,22],get_musicxml_schema_path:[19,22],get_yaml_schema_path:[19,22],getter:[1,7],github:26,give:[12,18,19],given:[11,13,14,16,19],grace:[16,19],grand:[12,16,19,29],great:26,groov:[17,19,28],groove_consist:[17,19,28],group:[12,19],halv:[13,18,19],ham:[17,19,28],handi:[1,7],handl:[2,17,19,23,28,31],hao:[17,19,26,28],has:[1,7,17,19,28],have:[16,19,26],height:[19,23,31],help:[11,14,19],here:[2,6,10,11,14,17,19,24,25,26,27,28,29,30],histogram:[17,19,28],hold:[0,16,19,20,21,29],homepag:[14,19],hour:11,hsiao:[17,19,28],hsuan:[17,19,28],html:[14,19],http:[11,12,14,19,26],hymn:11,hymnal:[11,14,19],hymnaldataset:[14,19],hymnaltunedataset:[14,19],idx:[12,18,19],ignor:[11,14,17,19,28],ignore_except:[11,14,19],ignore_nul:19,illustr:[2,11,30],implement:[1,7,17,19,26,28],inch:[19,23,31],includ:[11,12,14,18,19,20,21,26,29],increas:26,index:[11,12,14,18,19],indic:[2,11,12,14,16,19,20,21,29],infer:[16,19,20],info:[14,19],infom:[14,19],inform:[11,14,17,18,19,26,28,30],inherit:[2,11,12,14,19],input:[11,14,15,19,26],instanc:[11,14,19],instanti:19,instrument:10,integ:[16,19,20,21,29],integr:[11,14,19],intellig:[17,19,28],interfac:[11,14,18,19,26],intern:[11,17,19,26,28],intuit:19,invalid:[2,12,19],is_drum:[10,12,16,19,24,29],is_sort:[12,18,19],is_type_valid:19,is_valid:[2,19],is_valid_typ:19,ismir:[17,19,26,28],item:[2,12,19],iter:26,its:[14,19],jazz:[17,19,28],job:[11,14,19],johann:[14,19],jsbach:11,jsbchoralesdataset:[14,19],json:[11,14,16,18,19,20,22],julian:26,kei:[3,6,12,13,18,19,23],key_signatur:[6,18,19,24],keysignatur:[2,6,12,13,16,18,19,26],keyword:[16,19],kind:[11,14,16,18,19,20,23],kirkpatrick:26,known:[11,14,19],kwarg:[14,16,18,19,20,23,31],lakh:[11,14,19],lakhmididataset:[14,19],lambda:19,larger:[16,19,20,21,29],largest:[17,19,28],last:[12,18,19],late:[17,19,28],latest:[12,16,19],latter:[12,18,19],lead:[11,16,19,20,21,26,29],learn:[11,14,17,19,28],least:[17,19,28,30],left:[13,19,23],length:[17,19,28],less:[17,19,28],level:[12,19],librari:[16,19,20,26,27,31],lifo:[16,19],like:[2,19],line:[17,19,23,28],list:[1,2,5,6,10,11,12,13,14,16,18,19,29],literatur:[26,28],load:[11,14,16,18,19,26],load_json:[16,19,27],load_yaml:[16,19,27],local:[14,19,26],log_2:[17,19,28],look:[11,14,19],loselessli:[18,19,20],lossi:[16,19,20,21,29],losslessli:[19,20,27],lower:[12,13,18,19],ludwig:24,lun:[17,19,28],lyric:[2,6,10,12,13,18,19,24,26],machin:[11,14,17,19,28],made:31,maestro:[11,14,19],maestrodatasetv1:[14,19],maestrodatasetv2:[14,19],major:[3,17,19,23,28],make:[11,14,19],manag:[11,14,19,26],manual:[11,14,19],mark:[11,19,23],matplotlib:[19,23,31],matrix:[19,21],max_:[17,19,28],max_time_shift:[16,19,20,21,29],maximum:[11,14,16,19,20,21,29],mcaulei:26,md5:[11,14,19],mean:[17,19,28],meaning:[19,30],measur:[17,19,28],measure_resolut:[17,19,28],melodi:[11,19,20,21,24,29],messag:[16,19],metadata:[2,6,12,18,19,24,26],meter:[17,19,28],method:[2,11,14,19],metric:[15,19,26],metronom:[19,23],midi:[1,7,10,11,12,14,16,18,19,20,26,27,29,30],midierror:[16,19],mido:[16,19,20,26,27],might:26,minor:[17,19,23,24,28],minut:[8,12,18,19,30],misc:11,mit:[14,19],mode:[3,11,12,14,17,19,23,24,28],model:[19,26],modul:[14,16,17,20,22,23],mogren:[17,19,28],monophon:[19,20,21,29],monotoken:[14,16,18,19,20],more:[16,19,20,21,29],multi:[17,19,28],multipl:[16,17,19,28,30],multiprocess:[11,14,19],multitrack:[11,16,17,18,19,20,28],musegan:[17,19,28],music21:[11,14,16,19,20,26,27],music21dataset:[14,19],music:[2,7,10,11,12,13,14,15,16,17,19,20,21,23,26,28,29,30,31],musicdataset:[11,14,19],musicxml:[11,16,18,19,20,22,26,27,30],musicxmlerror:[16,19],muspi:[0,1,3,4,5,6,7,8,9,10,15,25,27,28,29,31],mxl:[19,20],n_job:[11,14,19],n_pitch_class_us:[17,19,28],n_pitch_classes_us:[17,19,28],n_pitches_us:[17,19,28],nad:27,name:[5,10,11,12,14,19,24],nan:[17,19,28],nativ:[16,20,27],ndarrai:[16,19,20,21,29],need:[16,19,26,30],neg:[12,13,18,19],neighbor:[17,19,28],nes:11,nesmusicdatabas:[11,14,19],network:[17,19,28],neuip:[17,19,28],neural:[17,19,28],new_resolut:[13,18,19],new_tim:[13,19],none:[11,12,13,14,16,18,19,20,23,31],nonserializ:[19,20],normal:[17,19,28],note:[1,2,3,8,10,11,12,13,14,16,17,18,19,20,21,23,24,26,28,30,31],note_spac:[19,23,31],noterepresentationprocessor:[19,21],noth:24,notic:[5,12,19],nottingham:[11,14,19],nottinghamdatabas:[14,19],number:[1,3,7,10,11,12,13,14,16,17,18,19,20,21,26,28,29,30],numer:[9,12,17,19,23,24,28],numpi:[14,16,19,20],obj1:[13,19],obj2:[13,19],obj:[13,16,19,20,23],object:[2,6,12,13,14,16,17,19,20,21,23,26,27,28,29,30,31],octav:[19,23,31],off:[16,19,20,21,29],offset:[18,19],old:[13,19],old_resolut:[13,18,19],old_tim:[13,19],olof:[17,19,28],on_the_fli:[14,19],one:[10,17,19,20,21,28,29],ones:19,onli:[10,14,16,17,19,20,21,23,28,29],ons:29,onset:[17,19,28],open:[17,19,28],oper:[2,19],option:[11,12,13,14,16,18,19,20,21,23,29,31],opu:[16,19],order:2,ordereddict:[13,19],org:[12,19],organ:[12,19],origin:[11,14,19],other:[16,19,20,26],otherwis:[14,17,19,20,21,28,29],out:[16,19],output:[14,15,19,21,26,29],over:[17,19,26,28],overid:[11,14,19],overview:26,packag:[17,19,26,28],page:[14,19],pair:[18,19],paper:26,paramet:[11,12,13,14,16,17,18,19,20,21,23,28,29,31],pars:[16,19],partial:11,particular:26,pass:[14,16,19],path:[11,14,16,18,19,20,22],pattern:[17,19,28],per:[6,8,12,16,17,18,19,23,28,29,30,31],percuss:[12,16,19,29],piano:[11,12,16,19,20,21,26,29],pianorol:[11,14,16,17,18,19,20,23,26,28],pianorollrepresentationprocessor:[19,21],pip:26,pipelin:[11,14,25,26],pitch:[1,7,12,13,16,17,18,19,20,21,23,24,26],pitch_class_entropi:[17,19,28],pitch_entropi:[17,19,28],pitch_in_scale_r:[17,19,28],pitch_rang:[17,19,28],pitch_str:[12,19],pitches_str:[12,19],pitchrepresentationprocessor:[19,21],plai:[17,19,28],playback:30,pleas:[11,14,19,26],plot:[19,23,31],plot_bar_lin:[19,23],plot_clef:[19,23],plot_final_bar_lin:[19,23],plot_key_signatur:[19,23],plot_not:[19,23],plot_object:[19,23],plot_staff:[19,23],plot_tempo:[19,23],plot_time_signatur:[19,23],plotter:[19,23,31],polici:[16,19],polyphon:[16,17,19,20,21,28,29],polyphoni:[17,19,28],polyphony_r:[17,19,28],polytoken:[14,16,18,19,20],posit:[6,12,13,17,18,19,23,28],possibl:31,ppq:30,ppqn:30,precomput:[11,14,19],prepar:[11,25],preprocess:[19,26],presenc:[19,21],presetn:[16,19],pretti:19,pretty_midi:[16,18,19,20,26,27],pretty_str:19,prettymidi:[16,18,19,20],prevent:[11,14,19],previou:[19,20,21,29],print:[2,14,19],proceed:[17,19,26,28],process:[11,13,19],processor:[15,19,26],program:[10,12,16,19,24,29],proper:[12,19],properli:[11,14,19],properti:[1,7,12,14,19],propos:[26,28],provid:[2,11,14,16,17,18,19,20,22,23,27,28],publish:26,puls:30,pypianorol:[16,17,18,19,20,26,27,28,31],python:[17,19,26,28],pytorch:[11,14,19,26],qpm:[8,12,19,23,24,30],quantit:[17,19,28],quarter:[8,12,16,18,19,23,29,30,31],rais:[11,12,13,14,18,19],random:[14,19],random_st:[14,19],randomst:[14,19],rang:[17,19,28],rate:[17,19,28],rather:[16,19,20,21,29],ratio:[14,17,19,28],read:[11,14,16,18,19,26,30],read_abc:[16,19],read_abc_str:[16,19],read_midi:[16,19,27],read_musicxml:[16,19,27],readabl:[12,18,19],real:[18,19],realtim:[18,19],recommend:[12,18,19],recurr:[17,19,28],recurs:[12,19],refer:[11,14,16,17,18,19,28,30],referencecorpu:[14,19],relat:[2,16,19,26,30],relationship:30,releas:26,remot:[14,19,26],remoteabcfolderdataset:[11,14,19],remotedataset:[11,14,19],remotefolderdataset:[11,14,19],remotemusicdataset:[11,14,19],remov:[2,11,13,14,19],remove_dupl:[2,19],remove_duplicate_chang:[13,19],remove_invalid:[2,19],render:[19,26],repres:[19,20,21,29],represent:[11,14,16,18,19,20,21,26],represetant:[19,20,21,29],reproduc:26,requir:19,resolut:[6,13,16,18,19,23,24,29,30,31],respect:[13,19,29],rest:[19,20,21,29],result:[25,26],retriev:[17,19,26,28],rhythm:26,right:[19,23],rnn:[17,19,28],roll:[11,16,19,20,21,26,29],root:[3,11,12,14,17,19,23,24,28],root_str:[3,12,19],routin:26,row:[19,21],run:[11,14,19,26],runtimeerror:[11,14,19],salu133445:26,same:[17,19,28],sampl:[11,14,17,19,28],save:[11,14,16,18,19,20,26],save_json:[18,19,20,27],save_yaml:[18,19,20,27],scale:[17,19,23,28,31],scale_consist:[17,19,28],schema:[5,12,15,16,19,26],schema_path:[16,19],schema_vers:[5,12,19,24],score:[18,19,20,23,26],scoreplott:[19,23,31],sebastian:[14,19],second:[12,19,20,21,29],see:[10,11,13,14,16,19],semiton:[12,13,18,19],sentenc:[4,12,19],separ:[16,19,20,21,29],sequenc:[16,19,20,21,29],sequenti:[17,19,28],serv:[11,14,19],set:[11,12,14,18,19,23,30],set_baselin:[19,23],setter:[1,7],setup:26,sever:[2,26,28,29],shannon:[17,19,28],shape:[19,20,21,29],share:26,sharp:[12,19],sheet:11,shift:[16,19,20,21,29],shih:[17,19,28],shortcom:[17,19,28],should:[11,14,19],show:[2,18,19,23,31],show_pianorol:[18,19,23,31],show_scor:[18,19,23,31],signatur:[3,6,9,12,13,17,18,19,23,28,30],simpl:[18,19],singl:[16,19,20,21,29],size:[11,14,19],skip:[11,14,19],smallest:30,societi:[17,19,26,28],sole:[11,14,19],some:[11,14,19,26,30],sometim:[1,7],song:[5,11,12,14,17,19,28],sort:[2,12,13,18,19],sound:[12,19],sourc:[5,11,12,13,14,16,17,18,19,20,21,22,23,26,28,29,31],source_exist:[14,19],source_filenam:[5,12,19,24],source_format:[5,12,19,24],space:[19,23,31],special:[11,14,16,19,20,21,29],specif:[10,12,16,18,19,20,29],split:[14,19],split_filenam:[14,19],staff:[19,23],stamp:[13,18,19],standard:26,start:[0,1,3,4,7,8,9,12,16,19,20,21,23,26,29],state:[14,16,19,20,21,29],statist:[17,28],step:[1,6,7,12,16,17,18,19,20,21,23,26,28,29,30,31],store:[2,11,14,18,19,20,27,30],str:[3,4,5,10,11,12,14,16,17,19,20,23,28,31],stream:[16,18,19,20],string:[3,12,19],success:[11,14,19],successfulli:[11,14,19],sum_:[17,19,28],summar:28,support:[2,14,16,19,20,23,26,27,29,31],sure:[11,14,19],syllabl:[4,12,19],symbol:[2,6,16,17,18,19,20,26,28,29],system:[11,14,17,19,26,28,30],take:[11,14,19],tar:[11,14,19],target:[13,14,16,18,19,20],taylor:26,technic:26,tempo:[2,6,12,13,18,19,20,23,24,26,30],tensor:[14,19],tensorflow:[11,14,19,26],test:[14,19],than:[16,17,19,20,21,28,29],them:[29,30],thi:[11,12,13,14,16,17,18,19,20,21,22,23,28,29,30],three:[14,19,27],threshold:[17,19,28],through:[17,19,28],tick:[16,19,20,21,29,30],time:[0,1,2,3,4,6,7,8,9,12,13,16,17,18,19,20,21,23,24,26,28,29,31],time_signatur:[6,18,19,24],timesignatur:[2,6,12,13,18,19,26],titl:[5,12,19,24],to_event_represent:[18,19,20,29],to_mido:27,to_monotoken_represent:[18,19],to_music21:[18,19,20,27],to_note_represent:[18,19,20,29],to_object:[18,19,20],to_ordered_dict:[2,13,19],to_pianoroll_represent:[18,19,20,29],to_pitch_represent:[19,20,29],to_polytoken_represent:[18,19],to_pretty_midi:[18,19,20,27],to_pypianorol:[18,19,20,27],to_pytorch_dataset:[11,14,19],to_represent:[18,19,20],to_tensorflow_dataset:[14,19],token:[19,20,21,29],tool:[19,26,31],toolkit:26,top:[19,23],torch:[14,19],total:[17,19,28],track:[2,6,12,13,16,17,18,19,24,26,28,29],train:[11,14,17,19,26,28],transform:[17,19,28],transpos:[12,13,18,19],trebl:[19,23,31],tripl:[17,19,28],tune:[11,14,16,19],tupl:[19,20,21,29],two:[11,14,16,17,19,20,21,28,29,30,31],type:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,23,27,28,29,31],typeerror:19,uint16:[19,20,21,29],uint8:[19,20,21,29],unchang:[13,19],uncompress:[19,20],uniqu:[17,19,28],unit:30,univers:[6,18,19],unpitch:[16,19],updat:[13,16,18,19,23],update_boundari:[19,23],upper:[12,13,18,19],url:[11,14,19],use:[11,14,16,19,20,21,26,29,31],use_convert:[11,14,19],use_end_of_sequence_ev:[16,19,20,21,29],use_hold_st:[16,19,20,21,29],use_single_note_off_ev:[16,19,20,21,29],use_start_end:[16,19,20,21,29],used:[13,14,16,17,18,19,20,21,26,27,28,29,30],uses:[19,20,21,29],using:[11,16,19,25],usual:26,util:[14,19],valid:[2,12,14,16,19,27],validate_typ:19,valu:[12,13,14,16,18,19,20,21,29,30],value_1:19,value_2:19,valueerror:19,van:24,variabl:19,vector:[17,19,28],veloc:[1,7,12,13,16,18,19,20,21,24,29],velocity_bin:[16,19,20,21,29],version:[5,12,19,26],visual:[15,18,19,26],wai:[18,19],warn:[11,14,19],web:[14,19],well:[11,14,19],wen:[17,19,26,28],when:[11,14,16,19,20,21,29,30],where:[17,19,20,21,28,29],whether:[11,12,14,16,18,19,20,21,29],which:[1,7,11,13,14,16,18,19,20,21,29,30],whole:[14,19],whose:19,width:[19,23,31],wikifonia:[11,14,19],wikifoniadataset:[14,19],word:[4,12,19],work:[2,17,19,22,26,28],workshop:[17,19,28],write:[18,19,20,25,26],write_midi:[18,19,20,27],write_musicxml:[18,19,20,27],wrong:19,www:[11,12,14,19],xml:[19,20],yaml:[2,6,11,14,16,18,19,20,22,24],yang:[17,19,28],yet:[16,18,19,20],you:26,zero:[17,19,23,28,31]},titles:["Annotation Class","Chord Class","MusPy Classes","KeySignature Class","Lyric Class","Metadata Class","Music Class","Note Class","Tempo Class","TimeSignature Class","Track Class","Datasets","muspy.classes","muspy.core","muspy.datasets","Technical Documentation","muspy.inputs","muspy.metrics","muspy.music","muspy","muspy.outputs","muspy.processors","muspy.schemas","muspy.visualization","Example Music Object","Getting Started","MusPy documentation","Data I/O","Metrics","Representations","Timing in MusPy","Visualization"],titleterms:{"class":[0,1,2,3,4,5,6,7,8,9,10,11,12],annot:0,base:[2,11,29],chord:1,cite:26,complexbas:2,content:26,core:[12,13],data:27,dataset:[11,14],detail:31,document:[15,26,31],event:29,exampl:[24,25],featur:[19,26],get:25,input:16,instal:26,interfac:[16,20,27],iter:11,json:27,keysignatur:3,load:27,local:11,lyric:4,metadata:5,metric:[17,28,30],music:[6,18,24,27],muspi:[2,11,12,13,14,16,17,18,19,20,21,22,23,26,30],note:[7,29],object:[11,18,24],other:[27,28],output:20,over:11,packag:27,pianorol:[29,31],pitch:[28,29],processor:21,read:27,relat:28,remot:11,represent:29,rhythm:28,save:27,schema:[22,27],score:31,start:25,support:11,symbol:27,technic:15,tempo:8,time:30,timesignatur:9,track:10,visual:[23,31],why:26,write:27,yaml:27}})