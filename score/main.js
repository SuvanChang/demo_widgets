require.config({
	shim:{
		jquery:{exports:'$'},
	},
	paths:{
		jquery:'jquery-1.12.3',
		score:'score'
	}
})

require(["score"],function(score) {
	score()
})