<template>
  <div class="container is-fullhd">
  <div class="notification">
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
  </div>
  <div class="card">
       <div class="card-content">
            <ul>
               <li v-for="player in Players" :key="player.name" >
                   {{player}}
                   
                   {{CurrentPicture}}
               </li>
            </ul>
        </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//for getting the content from js import {} from "module"
import {Players,PictureDeck,Init,CurrentPicture} from "../models/Game";
Init();
export default {
  name: 'Home',
  data:() =>({
    Players,
    PictureDeck,
    CurrentPicture
  })
  
}
</script>
