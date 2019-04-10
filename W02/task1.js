// Constructor
Vec3 = function( x, y, z )
{
    this.x = x;
    this.y = y;
    this.z = z;
}


//add method
Vec3.prototype.add = function( v )
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}
// Sum method
Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}
// min method
Vec3.prototype.min = function()
{
    if (this.x > this.y)
        {
            if(this.z > this.y)
                {
                    return this.y;
                }
            else 
                {
                    return this.z;
                }
        }
    else
        {
            if(this.z > this.x)
                {
                    return this.x;
                }
            else
                {
                    return this.z;
                }
        }
    
}
//max method
Vec3.prototype.max = function()
{
    var max = this.x;
    if(max < this.y)
        {
            max = this.y;
        }
    if(max < this.z)
        {
            max = this.z;
        }
    return max;
}
//mid method
Vec3.prototype.mid = function()
{
    var max = this.x;
    if(max < this.y)
        {
            max = this.y;
        }
    if(max < this.z)
        {
            max = this.z;
        }
    var min = this.x;
    if(min > this.y)
        {
            min = this.y;
        }
    if(min > this.z)
        {
            min = this.z;
        }
    var mid;
    if(this.x == min)
        {
            
            if(this.y == max)
                {
                    mid = this.z;
                }
            else
                {
                    mid = this.y;
                }
        }
    else if(this.y == min)
        {
            
            if(this.z == max)
                {
                    mid = this.x;
                }
            else
                {
                    mid = this.z;
                }
        }
    else
        {
            
            if(this.x == max)
                {
                    mid = this.y
                }
            else
                {
                    mid = this.x
                }
        }
    return mid;
}