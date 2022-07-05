<template>
    <div>
        <div class="mt-3">
            <b-card-group deck >

                <b-card bg-variant="light" no-body class="overflow-hidden" style="padding-top:10px ;">
                    <b-row align-h="center">
                        <b-col>
                            <b-card-body class="text-center">
                                <b-card-text style="font-weight:bold; font-size: large;">21,459</b-card-text>
                                <b-card-text>Total Vessels</b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <b-card-body class="text-center">
                                <user-icon float="right" size="4x" class="custom-class" stroke="#7367F0">
                                </user-icon>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <b-card bg-variant="light" no-body class="overflow-hidden" style="padding-top:10px ;" >
                    <b-row>
                        <b-col>
                            <b-card-body class="text-center">
                                <b-card-text style="font-weight:bold; font-size: large;">4,567</b-card-text>
                                <b-card-text>Total Contact Person</b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <b-card-body class="text-center">
                                <user-icon float="right" size="4x" class="custom-class" stroke="#7367F0">
                                </user-icon>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <b-card bg-variant="light" no-body class="overflow-hidden" style="padding-top:10px ;">
                    <b-row>
                        <b-col>
                            <b-card-body class="text-center">
                                <b-card-text style="font-weight:bold; font-size: large;">237</b-card-text>
                                <b-card-text>Pending Contact Person</b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <b-card-body class="text-center">
                                <user-icon float="right" size="4x" class="custom-class" stroke="#7367F0">
                                </user-icon>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

            </b-card-group>
        </div>

        <b-card bg-variant="light">
            <b-card bg-variant="light">

                <b-form-group label-cols-lg="3" label="Search & Filter" label-size="lg"
                    label-class="font-weight-bold pt-0" class="mb-0">
                </b-form-group>
                <br />

                <b-form>
                    <b-row>
                        <b-col>
                            <b-form-group id="b-from-g1" label="Vessel Name" label-for="input-3">
                                <b-form-select v-model="selected" :options="options" id="input-1"></b-form-select>
                            </b-form-group>

                        </b-col>
                        <b-col>
                            <b-form-group id="b-form-g2" label="Company Legal Name" label-for="input-3">
                                <b-form-select v-model="selected" :options="options" id="input-2"></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="b-form-g3" label="Vessel Type" label-for="input-3">
                                <b-form-select v-model="selected" :options="options" id="input-3"></b-form-select>
                            </b-form-group>

                        </b-col>
                    </b-row>
                </b-form>
                <br />
                <hr size="5" />
                <br />

                <b-form @submit="onSubmit" :inline="true" style="float:right; margin-bottom: 20px;">
                    <label id="b-form-g3" class="mb-2 mr-sm-2 mb-sm-0" for="inline-form-input-name" content-cols="10"
                        label-cols="4" label-align="right">Search</label>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="search" type="text" placeholder="Search" >
                    </b-form-input>
                    <b-button type="submit" @click="modalShow = !modalShow" variant="primary">Add
                        New
                        User
                    </b-button>
                </b-form>
                <br />

                <div>
                    <b-table responsive :table-variant="tableVariant" striped hover :items="items" :bordered="bordered"
                        :head-variant="headVariant" :striped="striped" :fields="fields" :selectTable="selectTable">
                        <template slot="checkbox" slot-scope="row">
                            <b-form-group>
                                <b-form-checkbox v-model="row.item.selected" variant="outline-secondary" class="mr-1">
                                </b-form-checkbox>
                            </b-form-group>
                        </template>
                        <template slot="status" slot-scope="{ item: { status }}">
                            <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted"
                                unchecked-value="not_accepted">
                                I accept the terms and use
                            </b-form-checkbox>
                        </template>
                    </b-table>
                </div>
            </b-card>
        </b-card>


        <b-modal hide-footer="true" size="lg" v-model="modalShow" id="modal-prevent-closing" ref="modal"
            title="Add Vessel">
            <b-form ref="form" @submit.stop.prevent="handleSubmit" @submit="onSubmit">
                <b-container fluid>
                    <b-row class="mb-1">                       
                        <b-col cols="6">
                            <b-form-group label="Vessel Name" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Invoice Country" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Vessel Type" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Vessel Contact" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Vessel E-Mail" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Tax No" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group label="Company Legal Name" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-select id="name-input" v-model="selected" :options="options">
                                </b-form-select>
                            </b-form-group>
                            <b-form-group label="Invoice City" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Vessel Imo" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Vessel Phone" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Tax Department" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-input id="name-input" v-model="name" :state="nameState" required>
                                </b-form-input>
                            </b-form-group>
                            <b-form-group label="Invoice Address" label-align-lg="left" label-for="name-input"
                                :state="nameState">
                                <b-form-textarea id="textarea-default"></b-form-textarea>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-container>

                <hr size="5" />
                <b-row>
                    <b-col></b-col>
                    <b-col lg="2">
                        <b-form-group >
                            <b-button type="submit" variant="primary">
                                Add
                            </b-button>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-form>
        </b-modal>
    </div>
</template>
<style>
b-form-input input .search {
    width: 15 px !important;

}
</style>

<script>

import { BTable, BFormGroup, BForm, BFormCheckbox, BFormSelect, label, BCard, BFormInput, BButton, BContainer, BRow, BCol, BFormTextarea, BCardGroup, BCardText, BCardBody } from 'bootstrap-vue'
import { UserIcon } from 'vue-feather-icons'

export default {
    components: {
        BTable,
        BFormGroup,
        BForm,
        BFormCheckbox,
        BFormSelect,
        BCard,
        BButton,
        BFormInput,
        BContainer,
        BRow,
        BCol,
        BFormTextarea,
        BCardGroup,
        UserIcon,
        BCardText,
        BCardBody,
        label

    },

    data() {
        return {
            selected: [],
            tableSelected: [],
            modalShow: false,

            computed: {
                selected() {
                    return this.items.filter(module => module.selected)
                },
            },


            name: '',
            nameState: null,
            submittedNames: [],


            options: [

                { value: 'a', text: 'This is First option' },
                { value: 'b', text: 'Selected Option' },
                { value: { C: '3PO' }, text: 'This is an option with object value' },
                { value: 'd', text: 'This one is disabled', disabled: true }
            ],


            fields: [

                {
                    key: 'isActive',
                    label: 'is Active',


                },
                {
                    key: 'vessel_name',
                    label: 'VESSEL NAME',
                    sortable: true,

                },
                {
                    key: 'c_legal_name',
                    label: 'C LEGAL NAME',
                    sortable: true,
                },
                {
                    key: 'contact_person',
                    label: 'CONTACT PERSON',
                    sortable: true,
                },
                {
                    key: 'vessel_type',
                    label: 'VESSEL TYPE',
                    sortable: true,
                },
                {
                    key: 'vessel_phone',
                    label: 'VESSEL PHONE',
                    sortable: true,
                },
                {
                    key: 'checkbox',
                    label: '',
                    class: 'd-none d-lg-table-cell'
                },
                {
                    key: 'status', label: '',
                    class: 'd-none d-lg-table-cell'
                }
            ],


            items: [
                { status: '', isActive: true, vessel_name: 'Dickerson', c_legal_name: 'Macdonald', contact_person: 'AFLEX', vessel_type: 'LPG Tanker', vessel_phone: '05318236362' },

            ],

            tableVariants: [
                'none',
            ],

            bordered: true,
            striped: true,

            headVariant: [
                'light',
            ]

        }
    },

    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        checkFormValidity() {
            const valid = this.$refs.form.checkValidity()
            this.nameState = valid
            return valid
        },  
        handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to submitted names
        this.submittedNames.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },   
        
        
    },
}


</script>
<style >
.custom-class {
    background-color:#EEECFD;
    margin: 20px;
    padding:10px;
    border-radius: 50% 50%;
    font-size: 21px;
}
</style>