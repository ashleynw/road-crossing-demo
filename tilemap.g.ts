// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`0b00110007070707070707070707070401040104010401040104010101010101010101010103030303030303030303030505050505050505050505040404040404040404040404040404040404040404040303030303030303030303050505050505050505050503030303030303030303030505050505050505050505040404040404040404040404040404040404040404040303030303030303030303050505050505050505050501010101010101010101010202020202020202020202`, img`
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
. . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.vehicle.roadHorizontal,sprites.castle.tileGrass1,myTiles.tile2,myTiles.tile3,sprites.castle.saplingPine], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
