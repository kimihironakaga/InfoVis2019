function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var scr = new THREE.Scene();
    
    var shade = 0;//0:no shade, 1:Phong, 2:Lambertian

    screen.init(volume, {
        width: window.innerWidth * 0.65,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });
    
    // Create color map
    var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
        var S = i / 255.0; // [0,1]
        var R = Math.max( Math.cos( ( S - 1.0 ) * Math.PI ), 0.0 );
        var G = Math.max( Math.cos( ( S - 0.5 ) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
        var color = new THREE.Color( R, G, B );
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }

    // Draw color map
    var lut = new THREE.Lut( 'rainbow', cmap.length );
    lut.addColorMap( 'mycolormap', cmap );
    lut.changeColorMap( 'mycolormap' );
    screen.scene.add( lut.setLegendOn( {
        'layout':'horizontal',
        'position': { 'x': 90, 'y': 150, 'z': 0 },
        'dimensions': { 'width': 15, 'height': 80 }
    } ) );

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var surfaces = Isosurfaces( volume, isovalue, shade );
    screen.scene.add( surfaces );
    

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });


    window.addEventListener('resize', function() {
        screen.resize([ window.innerWidth * 0.8, window.innerHeight ]);
    });
    
    window.addEventListener('load', function(){
        document.getElementById("change-iso-button").addEventListener("click", function(){
            var isovalue = document.getElementById("isovalue").value;
            
            screen.scene.remove(surfaces);
            surfaces = Isosurfaces( volume, isovalue, shade );
            screen.scene.add( surfaces );
        });
    });
    
    window.addEventListener('load', function(){
        document.getElementById("on-phong").addEventListener("click", function(){
            var isovalue = document.getElementById("isovalue").value;
            shade = 1;
            screen.scene.remove(surfaces);
            surfaces = Isosurfaces( volume, isovalue, shade );
            screen.scene.add( surfaces );
        });
    });
    
    window.addEventListener('load', function(){
        document.getElementById("clear-phong").addEventListener("click", function(){
            if(shade == 1){
                var isovalue = document.getElementById("isovalue").value;
                shade = 0;
                screen.scene.remove(surfaces);
                surfaces = Isosurfaces( volume, isovalue, shade );
                screen.scene.add( surfaces );
            } 
        });
    });
    
    window.addEventListener('load', function(){
        document.getElementById("on-lambertian").addEventListener("click", function(){
            var isovalue = document.getElementById("isovalue").value;
            shade = 2;
            screen.scene.remove(surfaces);
            surfaces = Isosurfaces( volume, isovalue, shade );
            screen.scene.add( surfaces );
        });
    });
    
    window.addEventListener('load', function(){
        document.getElementById("clear-lambertian").addEventListener("click", function(){
            if(shade == 2){
                var isovalue = document.getElementById("isovalue").value;
                shade = 0;
                screen.scene.remove(surfaces);
                surfaces = Isosurfaces( volume, isovalue, shade );
                screen.scene.add( surfaces );
            }      
        });
    });
    
    screen.loop();
}


