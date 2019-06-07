<template>
    <v-container>
            <v-flex xs6>
            <v-text-field
                type='number'
                label="Da"
                :value="min"
                v-on:change="aggiornaMin"
            ></v-text-field>
            </v-flex>

            <v-flex xs6>
            <v-text-field
                type='number'
                label="Al"
                :value="max"
                v-on:change="aggiornaMax"
            ></v-text-field>
            </v-flex>
    </v-container>
</template>

<script>
export default {

    props:{
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
        dbFieldName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            values: [],
            min: this.min,
            max: this.max
        }
    },

    methods: {
        aggiornaMin(value){
            console.log(value);
        },
        aggiornaMax(value){
            console.log(value);
        },
        aggiorna(){
            this.min = value
            var message = {fieldName: this.dbFieldName, values: this.values.sort()};
            this.$emit('childToParent', message);
        }
    }
}
</script>

<style>

</style>
