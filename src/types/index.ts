export type Vehicle = {
	name: string,
	id: number,
	category: VehicleCategory,
	driverName: string,
	driverPhone: string,
	latitude: number,
	longitude: number
	image?: string,
}

export type VehicleCategory = 'car'|'truck'|'moto';