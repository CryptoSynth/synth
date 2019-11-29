var eventBus = new Vue();

Vue.component("product", {
        props: {
            premium: {
                type: Boolean,
                required: true
            }
        },
        template: `

    <div class="product">

            <div class="product-image">
                <img :src="image" />
            </div>
            

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else
                   :class="{'cross-out': !inStock}">Out of Stock</p>
                <p>Shipping: {{ shipping }}</p>
                <h2>Details</h2>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                
                <h3>Colors:</h3>
                <div v-for="(variant, index) in variants" 
                     :key="variant.variantId"
                     class="color-box"
                     :style="{backgroundColor: variant.varksiantColor }"
                     @mouseover="updateProduct(index)"
                     >
                </div>
                
                <button @click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }">Add to Cart</button>

                <button @click="removeFromCart">Remove From Cart</button>

                <product-tabs :reviews="reviews"></product-tabs>
                
            </div>

        </div>
`,
        data() {
            return {
                brand: "Vue Mastery",
                product: " Socks",
                selectedVariant: 0,
                source: "https://www.youtube.com/",
                details: ["80% cotton", "20% polyester", "Gender-neutral"],
                variants: [{
                        variantId: 2234,
                        variantColor: "#42aa75",
                        variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
                        variantQuantity: 10
                    },
                    {
                        variantId: 2235,
                        variantColor: "#435873",
                        variantImage: "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
                        variantQuantity: 10
                    }
                ],
                reviews: []
            };
        },
        methods: {
            addToCart: function() {
                this.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
            },
            removeFromCart: function() {
                this.$emit(
                    "remove-from-cart",
                    this.variants[this.selectedVariant].variantId
                );
            },
            updateProduct: function(index) {
                this.selectedVariant = index;
            }
        },
        computed: {
            title() {
                return this.brand + " " + this.product;
            },
            image() {
                return this.variants[this.selectedVariant].variantImage;
            },
            inStock() {
                return this.variants[this.selectedVariant].variantQuantity;
            },
            shipping() {
                if (this.premium) {
                    return "Free";
                } else {
                    return 2.99;
                }
            }
        },
        mounted() {
            eventBus.$on("review-submitted", productReview => {
                this.reviews.push(productReview);
            });
        }
    }),
    Vue.component("product-review", {
        template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors"> {{ error }}</li>
            </ul>
        </p>
        <p>
            <label for="name">Name:</label>
            <input id="name" v-model="name" />
        </p>

        <p>
            <label for="review">Review:</label>
            <textarea id="review" v-model="review"></textarea>
        </p>

        <p>
            <label for="rating">Rating:</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
        </p>
        
        <p>Would you recommend this site?</p>
            <label>
                Yes
                <input type="radio" value="Yes" v-model="recommend" />
            </label>
            <label>
                No
                <input type="radio" value="No" v-model="recommend" />
            </label>

        <p>
            <input type="submit" value="Submit" />
        </p>
    </form>

`,
        data() {
            return {
                name: null,
                review: null,
                rating: null,
                recommend: null,
                errors: []
            };
        },
        methods: {
            onSubmit: function() {
                if (this.name && this.rating && this.review && this.recommend) {
                    let productReview = {
                        name: this.name,
                        review: this.review,
                        rating: this.rating,
                        recommend: this.recommend
                    };
                    eventBus.$emit("review-submitted", productReview);
                    this.name = null;
                    this.review = null;
                    this.rating = null;
                    this.recommend = null;
                } else {
                    if (!this.name) {
                        this.errors.push("Name Required!");
                    }
                    if (!this.review) {
                        this.errors.push("Review Required!");
                    }
                    if (!this.rating) {
                        this.errors.push("Rating Required!");
                    }
                    if (!this.recommend) {
                        this.errors.push("Recommendation Required!");
                    }
                }
            }
        }
    });

Vue.component("product-tabs", {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <span   class="tab"
                    :class="{activeTab: selectedTab === tab}"
                    v-for="(tab, index) in tabs" 
                    :key="index"
                    @click="selectedTab = tab">
                    {{ tab }}</span>

            <div v-show="selectedTab === 'Reviews'">
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul v-else>
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>Rating: {{ review.rating }}</p>
                        <p>{{ review.review }}</p>
                        <p>{{ review.recommend }} </p>
                    </li>
                </ul>
            </div>

            <product-review v-show="selectedTab ==='Make a Review'"></product-review>
        </div>


    `,
    data() {
        return {
            tabs: ["Reviews", "Make a Review"],
            selectedTab: "Reviews"
        };
    }
});

var app = new Vue({
    el: "#app",
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart: function(id) {
            this.cart.push(id);
        },

        removeItem: function(id) {
            for (var i = this.cart.length; i >= 0; i--) {
                if (this.cart[i] == id) {
                    this.cart.splice(i, 1);
                }
            }
        }
    }
});