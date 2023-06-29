export type Vehicle = {
	name: string,
	id: number,
	category: VehicleCategory,
	driverName: string,
	driverPhone: string,
	latitude: number,
	longitude: number
}

export type VehicleCategory = 'car'|'truck'|'moto';