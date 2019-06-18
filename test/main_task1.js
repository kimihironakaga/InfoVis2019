function main( red , green , blue )
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init(volume, {
        width: window.innerWidth * 0.8,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = red;
    var surfaces = Isosurfaces( volume, isovalue , red , green , blue );
    screen.scene.add( surfaces );

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });


    window.addEventListener('resize', function() {
        screen.resize([ window.innerWidth * 0.8, window.innerHeight ]);
    });
    /*
    var slider = doc.querySelector("[type=range]");
    
    slider.addEventListener("input", function() {
        display.setValue(this.value);
    }, false);

    slider.addEventListener("change", function() {
        display.setValue(this.value);
    }, false);
    */
    screen.loop();
}
