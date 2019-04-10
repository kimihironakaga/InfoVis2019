
function AreaOfTriangle( v0, v1, v2 )
{
    vx = v1.x-v0.x;
    vy = v1.y-v0.y;
    vz = v1.z-v0.z;
    ux = v2.x-v0.x;
    uy = v2.y-v0.y;
    uz = v2.z-v0.z;
    
    xg = vy*uz-vz*uy;
    yg = vz*ux-vx*uz;
    zg = vx*uy-vy*ux;
    
    xg2 = xg*xg;
    yg2 = yg*yg;
    zg2 = zg*zg;
    
    hoge = xg2+yg2+zg2;
    return Math.sqrt(hoge)/2;
}

