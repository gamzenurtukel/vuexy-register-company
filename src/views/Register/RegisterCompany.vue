<template>
    <div>
        <div class="mt-3">
            <b-card-group deck>

                <b-card bg-variant="light" no-body class="overflow-hidden" style="padding-top:10px ;">
                    <b-row align-h="center">
                        <b-col>
                            <b-card-body class="text-center">
                                <b-card-text style="font-weight:bold; font-size: large;">21,459</b-card-text>
                                <b-card-text>Total Users</b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <b-card-body class="text-center">
                                <user-icon float="right" size="4x" class="custom-class1" stroke="#7367F0">
                                </user-icon>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <b-card bg-variant="light" no-body class="overflow-hidden" style="padding-top:10px ;">
                    <b-row>
                        <b-col>
                            <b-card-body class="text-center">
                                <b-card-text style="font-weight:bold; font-size: large;">4,567</b-card-text>
                                <b-card-text>Paid Users</b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <b-card-body class="text-center">
                                <user-plus-icon float="right" size="4x" class="custom-class2" stroke="red">
                                </user-plus-icon>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <b-card bg-variant="light" no-body class="overflow-hidden" style="padding-top:10px ;">
                    <b-row>
                        <b-col>
                            <b-card-body class="text-center">
                                <b-card-text style="font-weight:bold; font-size: large;">237</b-card-text>
                                <b-card-text>Active Users</b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <b-card-body class="text-center">
                                <user-check-icon float="right" size="4x" class="custom-class3" stroke="green">
                                </user-check-icon>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>

                <b-card bg-variant="light" no-body class="overflow-hidden" style="padding-top:10px ;">
                    <b-row>
                        <b-col>
                            <b-card-body class="text-center">
                                <b-card-text style="font-weight:bold; font-size: large;">237</b-card-text>
                                <b-card-text>Pending Users</b-card-text>
                            </b-card-body>
                        </b-col>
                        <b-col>
                            <b-card-body class="text-center">
                                <user-x-icon float="right" size="4x" class="custom-class4" stroke="orange">
                                </user-x-icon>
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
                            <b-form-group id="b-from-g1" label="Role" label-for="input-3">
                                <b-form-select v-model="selected" :options="options" id="input-1"></b-form-select>
                            </b-form-group>

                        </b-col>
                        <b-col>
                            <b-form-group id="b-form-g2" label="Plan" label-for="input-3">
                                <b-form-select v-model="selected7" :options="options" id="input-2"></b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group id="b-form-g3" label="Statüs" label-for="input-3">
                                <b-form-select v-model="selected6" :options="options" id="input-3"></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-form>
                <br />
                <hr size="5" />
                <br />
                <label for="">Show </label>
                <b-dropdown text="10" class="m-2" variant="outline-primary">
                    <b-dropdown-item href="#">10</b-dropdown-item>
                    <b-dropdown-item href="#">20</b-dropdown-item>
                    <b-dropdown-item href="#">30</b-dropdown-item>
                </b-dropdown>

                <b-form @submit="onSubmit" :inline="true" style="float:right; margin-bottom: 20px;">
                    <label id="b-form-g3" class="mb-2 mr-sm-2 mb-sm-0" for="inline-form-input-name" content-cols="10"
                        label-cols="4" label-align="right">Search</label>
                    <b-form-input class="mb-2 mr-sm-2 mb-sm-0" id="search" type="text" placeholder="Search" required>
                    </b-form-input>
                    <b-dropdown variant="outline-primary" class="m-2" style="margin-right: 15px; min-width: 150px;">
                        <template #button-content>
                            <span>
                                <check-square-icon size="1.5x" class="custom-class"></check-square-icon> Export
                            </span>
                        </template>
                        <b-dropdown-item>
                        </b-dropdown-item>
                    </b-dropdown>

                    <b-button type="submit" @click="modalShow = !modalShow" variant="primary">Add
                        New Customer
                    </b-button>

                </b-form>
                <br />

                <div>
                    <b-table :responsive="sm" :table-variant="tableVariant" striped hover :items="items"
                        :bordered="bordered" :head-variant="headVariant" :striped="striped" :fields="fields" small
                        :selectTable="selectTable">
                        <template v-slot:cell(actions)="data">
                            <div>
                                <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                                    <template #button-content>
                                        <span>
                                            <more-vertical-icon size="1.5x" class="custom-class"></more-vertical-icon>
                                        </span>
                                    </template>
                                    <b-dropdown-item href="#">
                                        <span>
                                            <edit2-icon size="1.5x" class="custom-class"></edit2-icon> Edit
                                        </span>
                                    </b-dropdown-item>
                                    <b-dropdown-item href="#">
                                        <span>
                                            <trash-icon size="1.5x" class="custom-class"></trash-icon> Delete
                                        </span>
                                    </b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </template>
                        <template v-slot:cell(check)="data">
                            <div>
                                <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted"
                                    unchecked-value="not_accepted">
                                </b-form-checkbox>
                            </div>
                        </template>
                        <template v-slot:cell(c_legal_name)="data">
                            <span >                                
                                    <database-icon size="2x" class="custom-class" stroke="#7367F0"></database-icon> Maintanier                                                               
                            </span>
                        </template>
                        <template v-slot:cell(contact)="data">
                            <span class="badge rounded-pill badge-light-primary me-1">
                                Active
                            </span>
                        </template>
                    </b-table>
                </div>
            </b-card>
            <div class="mt-3" style="float: right;">
                <b-pagination v-model="currentPage" pills :total-rows="rows"></b-pagination>
            </div>
        </b-card>


        <b-modal hide-footer="true" size="lg" v-model="modalShow" id="modal-prevent-closing" ref="modal"
            title="Add New Records" @show="resetModal" @hidden="resetModal" @ok="handleOk">
            <div>
                <b-tabs content-class="mt-3">
                    <b-tab title="GENERAL" active>
                        <b-form>
                            <b-container fluid>
                                <b-row class="mb-1">
                                    <b-form ref="form" @submit.stop.prevent="handleSubmit" @submit="onSubmit"></b-form>
                                    <b-col cols="6">
                                        <b-form-group label="Company Name" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="company_name" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Country" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="county" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Company Type" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="company_type" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Director Name" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="director_name1" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="E-Mail" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="email1" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Tax No" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="tax_no" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-form-group label="Company Legal Name" label-align-lg="left"
                                            label-for="name-input" :state="nameState">
                                            <b-form-select id="name-input" v-model="selected1" :options="options">
                                            </b-form-select>
                                        </b-form-group>
                                        <b-form-group label="City" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="city1" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Referance" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="referance" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Director Phone" label-align-lg="left"
                                            label-for="name-input" :state="nameState">
                                            <b-form-input id="name-input" v-model="director_phone" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Tax Department" label-align-lg="left"
                                            label-for="name-input" :state="nameState">
                                            <b-form-input id="name-input" v-model="tax_department" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Address" label-align-lg="left" label-for="name-input"
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
                                    <b-form-group display="flex" flex-direction="row-reverse">
                                        <b-button type="submit" variant="primary">
                                            Add
                                        </b-button>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-tab>
                    <b-tab title="CONTACT PERSON" active>
                        <b-form>
                            <b-container fluid>
                                <b-row class="mb-1">
                                    <b-form ref="form" @submit.stop.prevent="handleSubmit" @submit="onSubmit"></b-form>
                                    <b-col cols="6">
                                        <b-form-group label="Director Name" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="director_name" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Phone" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="phone" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Email" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="email" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Director Name" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="director_name" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-form-group label="Title" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-select id="name-input" v-model="selected2" :options="options">
                                            </b-form-select>
                                        </b-form-group>
                                        <b-form-group label="Personel Phone" label-align-lg="left"
                                            label-for="name-input" :state="nameState">
                                            <b-form-input id="name-input" v-model="personel_phone" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Personel Email" label-align-lg="left"
                                            label-for="name-input" :state="nameState">
                                            <b-form-input id="name-input" v-model="personel_email" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Password" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="password" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <div>
                                    <label> Birthday</label>
                                    <b-form-datepicker v-model="value" :min="min" :max="max" locale="en"
                                        placeholder="gg.aa.yyyy">
                                    </b-form-datepicker>
                                </div>
                            </b-container>

                            <hr size=" 5" />
                            <b-row>
                                <b-col></b-col>
                                <b-col lg="2">
                                    <b-form-group display="flex" flex-direction="row-reverse">
                                        <b-button type="submit" variant="primary">
                                            Add
                                        </b-button>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-tab>
                    <b-tab title="Bank INFORMATION" active>
                        <b-form>
                            <b-container fluid>
                                <b-row class="mb-1">
                                    <b-form ref="form" @submit.stop.prevent="handleSubmit" @submit="onSubmit"></b-form>
                                    <b-col cols="6">
                                        <b-form-group label="Bank Name" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="bank_name" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Account Number" label-align-lg="left"
                                            label-for="name-input" :state="nameState">
                                            <b-form-input id="name-input" v-model="account_number" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="City" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="city" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="IBAN" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="iban" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                        <b-form-group label="Account Type" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-select id="name-input" v-model="selected3" :options="options">
                                            </b-form-select>
                                        </b-form-group>
                                        <b-form-group label="County" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-select id="name-input" v-model="selected4" :options="options">
                                            </b-form-select>
                                        </b-form-group>
                                        <b-form-group label="Branch Code" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="branch_code" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                        <b-form-group label="Swift Code" label-align-lg="left" label-for="name-input"
                                            :state="nameState">
                                            <b-form-input id="name-input" v-model="swift_code" :state="nameState" required>
                                            </b-form-input>
                                        </b-form-group>
                                    </b-col>
                                </b-row>
                                <div>
                                    <b-form-group label="Address" label-align-lg="left" label-for="name-input"
                                        :state="nameState">
                                        <b-form-textarea id="textarea-default"></b-form-textarea>
                                    </b-form-group>
                                </div>
                            </b-container>

                            <hr size=" 5" />
                            <b-row>
                                <b-col></b-col>
                                <b-col lg="2">
                                    <b-form-group display="flex" flex-direction="row-reverse">
                                        <b-button type="submit" variant="primary">
                                            Add
                                        </b-button>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-tab>
                </b-tabs>
            </div>
        </b-modal>
    </div>
</template>

<script>
import { BTable, BFormGroup, BForm, BFormCheckbox, BFormSelect, BPagination, BFormDatepicker, BCard, BBadge, BDropdownItem, BFormInput, BDropdown, BButton, BContainer, BRow, BCol, BFormTextarea, BCardGroup, BCardText, BCardBody, BTab, BTabs } from 'bootstrap-vue'
import { UserIcon, UserPlusIcon, UserXIcon, UserCheckIcon, CheckSquareIcon,DatabaseIcon, MoreVerticalIcon, Edit2Icon, TrashIcon } from 'vue-feather-icons'

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
        UserPlusIcon,
        UserXIcon,
        UserCheckIcon,
        BTabs,
        BTab,
        BFormDatepicker,
        CheckSquareIcon,
        BDropdown,
        BDropdownItem,
        MoreVerticalIcon,
        Edit2Icon,
        TrashIcon,
        BPagination,
        BBadge,
        DatabaseIcon
    },

    data() {
        return {
            rows: 100,
            currentPage: 5,

            selected: [],
            tableSelected: [],
            transports: [],
            modalShow: false,

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
                    key: 'check'

                },
                {
                    key: 'id',
                    label: 'ID',
                },
                {
                    key: 'c_legal_name',
                    label: 'COMPANY LEGAL NAME',
                    sortable: true,
                },
                {
                    key: 'county',
                    label: 'COUNTY',
                    sortable: true,
                },
                {
                    key: 'company_type',
                    label: 'COMPANY TYPE',
                    sortable: true,
                },
                {
                    key: 'contact',
                    label: 'CONTACT',
                    sortable: true,
                },
                {
                    key: 'actions',
                    label: 'Actions'

                }
            ],

            items: [
                { id: 'mrya Foster', county: 'Enterprise', company_type: 'Auto Debit' },

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
        resetModal() {
            this.name = ''
            this.nameState = null
        },
        handleOk(bvModalEvent) {
            // Prevent modal from closing
            bvModalEvent.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
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
<style>
.custom-class1 {
    background-color: #EEECFD;
    margin: 20px;
    padding: 10px;
    border-radius: 50% 50%;
    font-size: 21px;
}

.custom-class2 {
    background-color: #FDE8E6;
    margin: 20px;
    padding: 10px;
    border-radius: 50% 50%;
    font-size: 21px;
}

.custom-class3 {
    background-color: #E1EDDB;
    margin: 20px;
    padding: 10px;
    border-radius: 50% 50%;
    font-size: 21px;
}

.custom-class4 {
    background-color: #FBEDDF;
    margin: 30px;
    padding: 5px;
    border-radius: 50% 50%;
    font-size: 21px;
}
</style>