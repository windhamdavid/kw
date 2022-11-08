

Amplitude.init({
	"songs": [
		{
			"name": "Mazurka in A minor, Op. 17 No. 4",
			"artist": "Frédéric Chopin",
			"album": "",
			"url": "/audio/mazurka_am.mp3",
			"cover_art_url": "/img/chopin.png"
		},
		{
			"name": "Doctor Gradus as Parnuassum",
			"artist": "Claude Debussy",
			"album": "Children's Corner Suite, L 113",
			"url": "/audio/dr_gradus.m4a",
			"cover_art_url": "/img/gradus.png"
		},
		{
			"name": "Sonatina in C Major, Op. 55 No. 1",
			"artist": "Friedrich Kuhlau",
			"album": "",
			"url": "/audio/Kuhlau.mp3",
			"cover_art_url": "/img/kuhlau.png"
		},
    {
			"name": "China",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/01_China.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "Experiment in C Minor",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/02_Experiment_in_Cm.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "E Minor Diversion",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/03_EmDiversion.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "Poem",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/06_Poem.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "The Other Room",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/07_The_Other_Room.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "Smokin",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/08_Smokin.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "Poem #2",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/09_poem3.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "Poem #4",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/06_poem4.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "Prelude in G Minor",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/11_Prelude_in_Gm.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "Farout",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/12_farout.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "China #2",
			"artist": "2010",
			"album": "Icon",
			"url": "/audio/icon/15_china2.mp3",
			"cover_art_url": "/img/icons.jpg"
		},
		{
			"name": "Clementi Sample",
			"artist": "2010",
			"album": "Diversions",
			"url": "/audio/diversions/1_clementisample.mp3",
			"cover_art_url": "/img/diversions.jpg"
		},
	],
  "callbacks": {
        'play': function(){
            document.getElementById('album-art').style.visibility = 'hidden';
            document.getElementById('large-visualization').style.visibility = 'visible';
        },

        'pause': function(){
            document.getElementById('album-art').style.visibility = 'visible';
            document.getElementById('large-visualization').style.visibility = 'hidden';
        }
    },
	waveforms: {
    sample_rate: 200
  }
});

let songElements = document.getElementsByClassName('song');

for( var i = 0; i < songElements.length; i++ ){
	/*
		Ensure that on mouseover, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseover', function(){
		this.style.backgroundColor = '#494949';

		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#FFFFFF';

		if( !this.classList.contains('amplitude-active-song-container') ){
			this.querySelectorAll('.play-button-container')[0].style.display = 'block';
		}
		this.querySelectorAll('.song-duration')[0].style.color = '#FFFFFF';
	});

	/*
		Ensure that on mouseout, CSS styles don't get messed up for active songs.
	*/
	songElements[i].addEventListener('mouseout', function(){
		this.style.backgroundColor = '#FFFFFF';
		this.querySelectorAll('.song-meta-data .song-title')[0].style.color = '#272726';
		this.querySelectorAll('.song-meta-data .song-artist')[0].style.color = '#607D8B';
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
		this.querySelectorAll('.song-duration')[0].style.color = '#607D8B';
	});

	/*
		Show and hide the play button container on the song when the song is clicked.
	*/
	songElements[i].addEventListener('click', function(){
		this.querySelectorAll('.play-button-container')[0].style.display = 'none';
	});
}


const myModalEl = document.getElementById('Video');
var video = document.getElementById("redemption");
function stopVideo() {
	video.pause();
	video.currentTime = 0;
}
myModalEl.addEventListener('hidden.bs.modal', event => {
  stopVideo();
})

