<template>
    <div>
        <b-form @submit.prevent="submitForm">
            <b-row>
                <b-col>
                    <b-form-group id="last-name-group" label="Last Name:" label-for="last-name">
                        <b-form-select v-model="selected" :options="options"></b-form-select>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group id="first-name-group" label="First Name:" label-for="first-name">
                        <b-form-input id="first-name" type="time" v-model="firstName"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group id="last-name-group" label="Last Name:" label-for="last-name">
                        <b-form-input id="last-name" type="time" v-model="lastName"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger" class="ml-2">Reset</b-button>

        </b-form>
    </div>
</template> 

<script>
import {
    BRow, BFormGroup, BFormInput, BCol, BFormSelect, BButton, BForm
} from 'bootstrap-vue';
export default {
    components: {
        BRow, BFormGroup, BFormInput, BCol, BFormSelect, BButton, BForm
    },
    data() {
        return {
            firstName: '',
            lastName: '',
            selected: '',
            options: [
                { value: 'a', text: 'Please select an option' },
                { value: 'b', text: 'Selected Option' },
                { value: 'c', text: 'This is First option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
            ]
        }
    },
    methods: {
        submitForm() {
            console.log('First Name:', this.firstName)
            console.log('Last Name:', this.lastName)
            console.log('selected:', this.selected)
        }
    }
}
</script>
