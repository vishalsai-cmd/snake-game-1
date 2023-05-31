const gridsize=vargrid;
export function outsidegrid(position){
    return(
        position.x <1 || position.x > gridsize || position.y < 1 || position.y > gridsize
    )
}