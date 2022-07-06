
const posts = []

const images = [
    'https://source.unsplash.com/random',
    'https://picsum.photos/1080',
    'https://images.unsplash.com/photo-1656421776633-f9d44bb5a9bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5ODkwMg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1654612870179-cc1c965d6b4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTA1OQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://i.picsum.photos/id/782/1080/1080.jpg?hmac=PEQ1fw2jOFJiqZUtwl8XZz1Cf8yQK62vR3oSWDYegro',
    'https://i.picsum.photos/id/603/1080/1080.jpg?hmac=41SuHwnTQxROCClM4Ad7S5OTRhGg8NdqGbuSZVF6Kjo',
    'https://i.picsum.photos/id/418/1080/1080.jpg?hmac=t2HJdScuU0auETxslyDGuBUv0Ppr7k2hBuOVLTGmi78',
    'https://i.picsum.photos/id/118/1080/1080.jpg?hmac=MWKdBH9ThkHti3det32oBOcbgC8t7asm-iEOxxlq8OY',
    'https://i.picsum.photos/id/659/1080/1080.jpg?hmac=_To6fpzA0QnMsx3PTeTwtVxjjbnnNN2rliHf9q0UDNU',
    'https://i.picsum.photos/id/448/1080/1080.jpg?hmac=eSoCRDNMFa-G8_i_SOyxYqMb50dJgK_2vpC_K9RF0W0',
    'https://i.picsum.photos/id/243/1080/1080.jpg?hmac=_ypC_jIpMHsXsdkvkz41fp3bzZTkShyG37Hw4Oll-yg',
    'https://i.picsum.photos/id/598/1080/1080.jpg?hmac=5AYRYk7HgnnQa-4AnYn4jtItyDvi5wpkOAj2nnox7Og',
    'https://i.picsum.photos/id/690/1080/1080.jpg?hmac=prAQJ63NwNoWaDzHAx_Uczt-2emrB1Bx6_MOtLcIviA',
    'https://i.picsum.photos/id/449/1080/1080.jpg?hmac=50NtTbV7sjWiZVKA1u95Jx7GCiokMY9nRfo1zQd6FZM',
    'https://i.picsum.photos/id/518/1080/1080.jpg?hmac=I7ex48ZnbJvyYbeCU2AnhkJT2km1_kVoLdEwVKtwUqA',
    'https://i.picsum.photos/id/352/1080/1080.jpg?hmac=5tJSUTB0Wg5uJyD7Ju4ZyDrmR9Wf9rNzEKPYJsBRA5A',
    'https://images.unsplash.com/photo-1655963858499-39255adcf28e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTIyNg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1655475020278-573fd0a8c140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTIyNg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1655947714947-451781994012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTIyNw&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1654468087390-c3a7b2315180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTIyOA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1654578735760-b56105387a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTIyOQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656873173998-2cbba5365397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTIzMQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1654630563914-ddac6cc21923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTIzMg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://i.picsum.photos/id/211/1080/1080.jpg?hmac=pAJN5zF_vBMXQrX4S54hcF0nSfeWDUk_V0uCTGcb49s',
    'https://i.picsum.photos/id/475/1080/1080.jpg?hmac=_ANTV8NHLj_fqShd8lqlbe6VAbfLg154EyNB6A0LNes',
    'https://i.picsum.photos/id/466/1080/1080.jpg?hmac=gowV-r3pUsCz2c8AEt32G9MJ2cHE1YPjbVGwnrOWn7E',
    'https://i.picsum.photos/id/869/1080/1080.jpg?hmac=_eJDY06mJGdlV7R2wxR61zXMB_4YZtdK6ep0CkLGPhs',
    'https://i.picsum.photos/id/26/1080/1080.jpg?hmac=YF-PYfKolMykx1arrzfkXFCgCVraiYRX1cWrZixwSdQ',
    'https://i.picsum.photos/id/692/1080/1080.jpg?hmac=8Efvtc1Zc17yrK-wEw2jGjaGPxlm_KBL_kj6CsAmKlM',
    'https://i.picsum.photos/id/930/1080/1080.jpg?hmac=7Wez9Fxfd4fUgNegzPfnw8WBidBgNDpma4Ex0mZuP34',
    'https://i.picsum.photos/id/962/1080/1080.jpg?hmac=ri7Y4ycGIx90XGVGQTK-Rjk9Xz4bTfG3WsHPqY3llf8',
    'https://i.picsum.photos/id/731/1080/1080.jpg?hmac=F92hClHsyP3W-nTnqXmWnc8WCZtjn2qycRxVtyNop_Q',
    'https://images.unsplash.com/photo-1656534979177-5e96410fff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTU5MQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656057368376-5fbc70ccca82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTYzNA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1657002774608-5f1914825a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTY1Mw&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1657030391597-a02cad4ec92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTY1NA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656057368376-5fbc70ccca82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTYzNA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656663584992-e1f24fe5eae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTY1MQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1657002774608-5f1914825a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTY1Mw&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1657030391597-a02cad4ec92c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTY1NA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1655814531620-6b33b9cb9ca9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTY1NQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1654653228188-4e88553ce461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTY1Nw&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1657051725161-00089344fb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTY1OA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656504020198-7eb1a82027f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTkwOA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656709959289-d8772d63d29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTkxMA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656325829438-bd0f9378d5a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTkyOA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656536665960-7bc8547e2e01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTkyOQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1655848870451-3e04381ec0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTk1MQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1655848870451-3e04381ec0f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTk1MQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1656164914465-a2b547314dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzA5OTk3MA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://i.picsum.photos/id/936/1080/1080.jpg?hmac=mfj8hy5LrFGBvMsCFNgugrijP87So6mkEe9rRXeopT8',
    'https://i.picsum.photos/id/995/1080/1080.jpg?hmac=wSn-7r360pMETLSrkxa8Twzn9Bbb1vimqIR88MwOeBo',
]

let imageIndex = 0;

for(let i = 1; i <= 51; i++){
    let item = {
        id: i,
        title: `Post ${i}`,
        image: images[imageIndex]
    }
    posts.push(item);
    imageIndex++;
    if (imageIndex > images.length - 1) imageIndex = 0;
}