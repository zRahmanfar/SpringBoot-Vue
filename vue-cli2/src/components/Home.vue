<template>

    <div>



        <div id="txtWellcome" class="txtWellcomediv">
            <div class="txtWellcome">
                <h1>Night Together God So Great</h1>
                <p>Light <strong>blessed</strong> green. Over fill whose saw face green
                    <em>rule</em> blessed signs. Creature forth let fish can&#39;t created you rule.<br>
                    Saw male so, sea the divide, void unto fill there thing can&#39;t without fruitful you form heaven won&#39;t,
                    seed replenish firmament, tree fowl  seed replenish firmament, tree fowl seed replenish firmament, tree fowl
                    <strong>wherein</strong>  divided creature let night over whose.  divided creature let night over whose. divided creature let night over whose.</p>
            </div>
        </div>

        <div id="divBtn">
            <button type="button" class="mr1" @click="downloudeCv">My CV</button>
            <button type="button" class="mr1" @click="reforderPojectBtn">Order Project</button>

        </div>

        </div>
      
</template>
<script>
export default {
    data(){
        return{

    }
        },

    methode:{
        downloudeCv(){
console.log("cv");
    },
        reforderPojectBtn(){
        }
}
}

</script>


<style scoped>

    .txtWellcomediv {
        margin-top:10%;
        padding:20px;
        height:350px;
        -webkit-border-radius: 12px;
        -moz-border-radius: 12px;
        background-color:#bfd6e2;
        display:block;
        margin-left:auto;
        margin-right: auto;


    }
    .txtWellcome {
        width: 500px;
        height: 350px;
        margin-left:70px


    }
    .mr1{
        margin-left: 70px;
        margin-top: 2rem;
        font-size: large;
        border-color: #3e434c;



    }

</style>

