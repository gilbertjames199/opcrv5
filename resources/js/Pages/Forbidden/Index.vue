<template>
    <Head>
        <title>Home</title>
    </Head>
    <!--<p style="text-align: justify;">Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur.
    </p>-->
    <div class="row gap-20 masonry pos-r">
        <div class="masonry-sizer col-md-6"></div>
        <!-- <div class="masonry-item w-100">
            <div class="row gap-20"></div>
            <h1><span style="color:red">Forbidden!</span></h1>
        </div> -->
        <div class="container">
            <h1>403 Forbidden</h1>
            <p>Oops! You don't have permission to access this page.</p>
            <p><a class="back-link" href="/">Go back to the homepage</a></p>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        auth: Object
    },
    data() {
        return{

        }
    },
    components: {

    }
};
</script>
<style>
            .row-centered {
                text-align:center;
            }
            .col-centered {
                display:inline-block;
                float:none;
                text-align:left;
                margin-right:-4px;
            }
            .pos{
                position: top;
                top: 240px;
            }


            .container {
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 5px;
                background-color: #fff;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                text-align: center;
                justify-content: center;
                align-items: center;
            }

            h1 {
                margin-top: 0;
                color: #cc0000;
            }

            p {
                margin: 20px 0;
            }

            .back-link {
                color: #007bff;
                text-decoration: none;
            }
</style>
