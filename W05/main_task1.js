function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );
    

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );
    
    
    var vertices = [
        [-1, 1, 0],  // v0
        [-1,-1, 0],  // v1
        [ 1,-1, 0],  // v2
        [ 1, 1, 0],  // v3
        [-1, 1, -2], // v4
        [-1,-1, -2], // v5
        [ 1,-1, -2], // v6
        [ 1, 1, -2]  // v7
    ];
    var faces = [
        [0,1,2], // f0: v0-v1-v2
        [0,2,3], // f1: v0-v2-c3
        [7,6,5], // f2: v7-v6-c5
        [4,7,5], // f3: v4-v7-c5
        [1,0,4], // f4: v4-v0-c1
        [4,5,1], // f5: v4-v1-c5
        [3,2,6], // f6: v3-v2-c6
        [7,3,6], // f7: v7-v3-c6
        [4,0,3], // f8: v4-v0-c3
        [3,7,4], // f9: v3-v7-c4
        [2,1,6], // f10: v2-v1-c6
        [5,6,1]  // f11: v5-v6-c1
    ];
    
    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var v3 = new THREE.Vector3().fromArray( vertices[3] );
    var v4 = new THREE.Vector3().fromArray( vertices[4] );
    var v5 = new THREE.Vector3().fromArray( vertices[5] );
    var v6 = new THREE.Vector3().fromArray( vertices[6] );
    var v7 = new THREE.Vector3().fromArray( vertices[7] );
    
    var id = faces[0];
    var f0 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[1];
    var f1 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[2];
    var f2 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[3];
    var f3 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[4];
    var f4 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[5];
    var f5 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[6];
    var f6 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[7];
    var f7 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[8];
    var f8 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[9];
    var f9 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[10];
    var f10 = new THREE.Face3( id[0], id[1], id[2] );
    var id = faces[11];
    var f11 = new THREE.Face3( id[0], id[1], id[2] );
    
    
    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.vertices.push( v3 );
    geometry.vertices.push( v4 );
    geometry.vertices.push( v5 );
    geometry.vertices.push( v6 );
    geometry.vertices.push( v7 );


    geometry.faces.push( f0 );
    geometry.faces.push( f1 );
    geometry.faces.push( f2 );
    geometry.faces.push( f3 );
    geometry.faces.push( f4 );
    geometry.faces.push( f5 );
    geometry.faces.push( f6 );
    geometry.faces.push( f7 );
    geometry.faces.push( f8 );
    geometry.faces.push( f9 );
    geometry.faces.push( f10 );
    geometry.faces.push( f11 );
    
    
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color( 1, 0, 0 );
    geometry.faces[2].color = new THREE.Color( 1, 0, 1 );
    geometry.faces[4].color = new THREE.Color( 1, 1, 0 );
    geometry.faces[6].color = new THREE.Color( 0, 1, 1 );
    geometry.faces[8].color = new THREE.Color( 0, 0, 1 );
    geometry.faces[10].color = new THREE.Color( 0, 1, 0 );
    /*
    var material = new THREE.MeshBasicMaterial();
    material.vertexColors = THREE.VertexColors;
    geometry.faces[0].vertexColors.push(new THREE.Color(1,0,0));
    geometry.faces[0].vertexColors.push(new THREE.Color(0,1,0));
    geometry.faces[0].vertexColors.push(new THREE.Color(0,0,1));
    */
    // Normal vectors for each face are automatically computed.
    geometry.computeFaceNormals();
    
    // Front: THREE.FrontSide (default)
    // Back: THREE.BackSide
    // Both: THREE.DoubleSide
    material.side = THREE.FrontSide
    
    var tri = new THREE.Mesh( geometry, material );
    scene.add( tri );

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        tri.rotation.x += 0.005;
        tri.rotation.y += 0.003;
        renderer.render( scene, camera );
    }
}
