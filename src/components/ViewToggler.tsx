import React from 'react';

const ViewToggler = () => {
  return (
    <FlatList
      data={vehicles.filter((vehicle) =>
        category === 'all' ? true : vehicle.category === category,
      )}
      renderItem={({ item }: { item: Vehicle }) => <VehicleCard vehicle={item} />}
    />
  );
};

export default ViewToggler;
