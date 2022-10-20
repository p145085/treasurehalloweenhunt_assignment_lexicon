import { createClient } from "pexels";
import * as pexels from 'pexels';

const client = createClient('563492ad6f917000010000011d8afd772e054068975504c135f0c84a');

function getImageFromPixels(){
  // make a request towards pixels API and get 1 Diamond image
  // 563492ad6f917000010000011d8afd772e054068975504c135f0c84a

  const client = pexels.createClient('563492ad6f917000010000011d8afd772e054068975504c135f0c84a');
  const query = 'Diamond';

  client.photos.search({ query, per_page: 1 }).then(photos => {foreach.console.log(photos)});
}