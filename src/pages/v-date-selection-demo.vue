<template>
<v-container class="py-6">
	<v-card class="white px-6 py-6">
		<h1 class="font-weight-bold pt-3">
			<p>v-date-selection</p>
		</h1>
		<div>install via <a href="https://www.npmjs.com/package/vuetify-date-selection" target="_BLANK">NPM</a></div>
		<v-divider class="my-3"></v-divider>
		<div>
			<div>
				<v-switch v-model="is_range" label="Range">
				</v-switch>
			</div>
			<v-date-selection
				v-model="start_date_input" 
				:range="is_range"
				color="info" event-color="info lighten-1"
				start-text="Select Start Date" end-text="Select End Date"
			></v-date-selection>
		</div>
		<v-divider class="my-3"></v-divider>
		<h2>
			<p>Example</p>
		</h2>
		<div class="text-center">
			<div><p>v-model: {{ start_date_input }}</p></div>
			<div class="pa-6 grey lighten-3">
				<v-dialog
					ref="start_date_ref" 
					v-model="start_date_dialog"
					:return-value.sync="start_date_input"
					persistent 
					:width="has_end_date ? '700px' : '400px'"
				>	
					<template v-slot:activator="{ on }">
						<v-btn class="primary" v-on="on">Open Dialog</v-btn>
					</template>
					<v-date-selection
						v-model="start_date_input" 
						:range="has_end_date"
						color="info" event-color="info lighten-1"
						start-text="Select Start Date" end-text="Select End Date"
					>
						<template>
							<v-checkbox v-model="has_end_date" label="Select End Date">
								<template slot="label"><span class="caption">Select End Date</span></template>
							</v-checkbox>
							<!-- center spacing -->
							<v-col cols=auto></v-col> 
							<v-spacer></v-spacer>
							<v-btn text color="primary" @click="start_date_dialog = false">Cancel</v-btn>
							<v-btn text color="primary" @click="$refs.start_date_ref.save(start_date_input)">OK</v-btn>
						</template>
					</v-date-selection>
				</v-dialog>
			</div>
		</div>
	</v-card>
</v-container>
</template>

<script>
import VDateSelection from 'vuetify-date-selection'
export default{
	components:{
		VDateSelection
	},
	data(){
		return {
			is_range: false,
			start_date_input: null,
			has_end_date: null,
			start_date_dialog: false,
			start_date_sync: null
		}
	},
}
</script>