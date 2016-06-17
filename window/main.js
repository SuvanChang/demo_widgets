require.config({
	shim:{
		jQuery:{exports:'$'},
		jQueryUI:{exports:'$UI'}
	},
	paths:{
		jQuery:'jquery-1.12.3',
		jQueryUI:'jquery-ui-1.10.4.custom.min',
	}
})
require(['jQuery','window'],function($,w) {
	$('span').on('click',function(){
		w.alert({config:{y:50}})
	})
})