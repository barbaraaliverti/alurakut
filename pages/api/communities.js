import { SiteClient } from 'datocms-client';

export default async function receiveCommunitiesRequest(request, response) {

    if (request.method === 'POST') {
        const TOKEN = 'a508b8ee3632cf4c6f79070517d851';

        const client = new SiteClient(TOKEN);

        const newCommunityAdded = await client.items.create({
            itemType: '968048', //id do Model Communities do DatoCMS
            ...request.body,
            // title: 'Comunidade teste',
            // imageUrl: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/DED5/production/_104154075_gettyimages-154948449.jpg',
            // creatorSlug: 'Luinha'
        })

        response.json({
            dados: 'algum dado',
            newCommunityAdded: newCommunityAdded,
        })
        return;
    }


    
}