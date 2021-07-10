const app = Vue.createApp(
    {
        // components:{
        //     //local
        // },
        // template:` `,
        data(){
            return{
                title:'salam',
                boolean: true,
                number:20,
                src: 'https://picsum.photos/250/300',
                src2: 'https://picsum.photos/252/300',
                srcx: 'https://picsum.photos/seed/picsum/300/300',
                alt:'viu.js',
                alt:'viu.jsx',
                href:'https://picsum.photos/',
                text: 'example with vue',
                colorstste:true,
                newstyle:{border:'5px solid red'},
                names:['name1','name2','name3','name4'],
                list:[
                    {
                        name:'name1',age:20
                    },
                    {
                        name:'name2',age:25
                    },
                    {
                        name:'name3',age:30
                    },
                    {
                        name:'name4',age:35
                    }

                ]

            }
        },
        watch:{
        },
        computed:{
            example(){

            }
        },
        methods: {
            welcome(){
                let title = 'vue.js';
                return this.title
            },

            update(){
                this.text=' advance example with vue.js'
            },
            event(Ntext){
                this.text=Ntext
            },
            changeBg(){
                this.colorstste= !this.colorstste

            },
            refBtn(){

                this.$refs.refrence.style.color='red';

            },
            beforeCreate(){
                console.log('beforeCreate');
            },
            created(){
                console.log('created');
            },
            beforeMount(){
                console.log('beforeMount');
            },
            Mount(){
                console.log('Mount');
            },
            beforeUpdate(){
                console.log('beforeUpdate');
            },
            Update(){
                console.log('Update');
            }

        }
    }
).mount('#app');
//global
//app.component('Home',Home);
//app.mount('#app')
