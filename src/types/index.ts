export type Vehicle = {
	name: string,
	id: number,
	category: VehicleCategory,
	driverName: string,
	driverPhone: string,
}

export type VehicleCategory = 'car'|'truck'|'moto';