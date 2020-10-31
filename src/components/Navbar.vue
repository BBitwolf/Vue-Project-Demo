<template>
<div>
	<v-app-bar dark>
        <v-app-bar-nav-icon @click="isOpen=!isOpen"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-toolbar-title><v-icon left>mdi-github</v-icon>bbitwolf</v-toolbar-title>
	</v-app-bar>
	<!-- Side bar -->
	<v-navigation-drawer
        v-model="isOpen"
        app
        fixed
		dark temporary
	>   
		<template v-for="(group,i) in route_groups">
			<v-list nav :subheader="group.title!=null" dense :key="i">
				<v-subheader v-if="group.title!=null">{{group.title }}</v-subheader>
				<template v-for="(item,i) in group.routes">
					<v-menu
						v-if="item.sub != null"
						offset-x open-on-hover 
						close-on-content-click close-on-click
						:key="i"
					>
						<template v-slot:activator="{ on, attrs }">
						<v-list-item
							v-model="navIndex"
							v-bind="attrs" v-on="on"
							:to="item.route"
						>
							<v-list-item-icon>
								<v-icon>{{ item.icon }}</v-icon>
							</v-list-item-icon>
							<v-list-item-content>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item-content>
							<v-list-item-icon>
								<v-icon>mdi-chevron-right</v-icon>
							</v-list-item-icon>
						</v-list-item>
						</template>
						<v-list dense>
							<v-list-item
								v-for="(item, index) in item.sub"
								:key="index"
								:to="item.route"
							>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
					<v-list-item
						v-else
						v-model="navIndex"
						:to="item.route"
						:key="i"
					>
						<v-list-item-icon>
							<v-icon>{{ item.icon }}</v-icon>
						</v-list-item-icon>
						<v-list-item-content>
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</template>
			</v-list>
		</template>
	</v-navigation-drawer>

</div>
</template>

<script>
export default {
	data () {
		return {
			isOpen: false,
			route_groups: null,
			navIndex: 0,
		}
	},
	components : { },
	watch:{
	},
	created(){
		const publicPath = process.env.NODE_ENV === 'production' ? '/Vue-Project-Demo/' : '/'
		this.route_groups = [
			{
				title : "General",
				routes : [
					{ 
						icon: "mdi-home", title : "Home", route: publicPath, sub: null 
					},
				]
			},
			{
				title : "Example",
				routes : [
					{ 
						icon: "mdi-widgets", title : "Vuetify Image Clipper", route: publicPath+'vuetify-image-clipper', sub: null
						// sub: [
						// 	{ title : "example", route: "/example" },
						// ] 
					},
					{ 
						icon: "mdi-widgets", title : "Vuetify Date Selection", route: publicPath+"vuetify-date-selection", sub: null 
					},
				]
			}
		]
	},
	methods: {
	}
  }
</script>