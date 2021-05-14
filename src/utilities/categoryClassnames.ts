const all = [
  'FGBuildable',
  'FGBuildableAttachmentMerger',
  'FGBuildableAttachmentSplitter',
  'FGBuildableCircuitSwitch',
  'FGBuildableConveyorBelt',
  'FGBuildableConveyorLift',
  'FGBuildableDockingStation',
  'FGBuildableDroneStation',
  'FGBuildableFactory',
  'FGBuildableFactorySimpleProducer',
  'FGBuildableFloodlight',
  'FGBuildableFoundation',
  'FGBuildableFrackingActivator',
  'FGBuildableFrackingExtractor',
  'FGBuildableGeneratorFuel',
  'FGBuildableGeneratorGeoThermal',
  'FGBuildableGeneratorNuclear',
  'FGBuildableJumppad',
  'FGBuildableLadder',
  'FGBuildableLightSource',
  'FGBuildableLightsControlPanel',
  'FGBuildableMAM',
  'FGBuildableManufacturer',
  'FGBuildableManufacturerVariablePower',
  'FGBuildablePipeHyper',
  'FGBuildablePipeReservoir',
  'FGBuildablePipeline',
  'FGBuildablePipelineJunction',
  'FGBuildablePipelinePump',
  'FGBuildablePipelineSupport',
  'FGBuildablePole',
  'FGBuildablePowerPole',
  'FGBuildablePowerStorage',
  'FGBuildableRadarTower',
  'FGBuildableRailroadStation',
  'FGBuildableRailroadTrack',
  'FGBuildableResourceExtractor',
  'FGBuildableResourceSink',
  'FGBuildableResourceSinkShop',
  'FGBuildableSnowDispenser',
  'FGBuildableSpaceElevator',
  'FGBuildableSplitterSmart',
  'FGBuildableStair',
  'FGBuildableStorage',
  'FGBuildableTradingPost',
  'FGBuildableTrainPlatformCargo',
  'FGBuildableTrainPlatformEmpty',
  'FGBuildableWalkway',
  'FGBuildableWall',
  'FGBuildableWaterPump',
  'FGBuildableWire',
  'FGBuildingDescriptor',
  'FGChainsaw',
  'FGColorGun',
  'FGConsumableDescriptor',
  'FGConsumableEquipment',
  'FGConveyorPoleStackable',
  'FGEquipmentDescriptor',
  'FGEquipmentStunSpear',
  'FGEquipmentZipline',
  'FGGasMask',
  'FGGolfCartDispenser',
  'FGHoverPack',
  'FGItemDescriptor',
  'FGItemDescriptorBiomass',
  'FGItemDescriptorNuclearFuel',
  'FGJetPack',
  'FGJumpingStilts',
  'FGNobeliskDetonator',
  'FGObjectScanner',
  'FGParachute',
  'FGPipeHyperStart',
  'FGPoleDescriptor',
  'FGPortableMinerDispenser',
  'FGRecipe',
  'FGResourceDescriptor',
  'FGSchematic',
  'FGSnowballWeapon',
  'FGSuitBase',
  'FGVehicleDescriptor',
  'FGWeaponInstantFire',
  'FGWeaponProjectileFire'
];

const buildables = [
  'FGBuildable',
  'FGBuildableAttachmentMerger',
  'FGBuildableAttachmentSplitter',
  'FGBuildableCircuitSwitch',
  'FGBuildableConveyorBelt',
  'FGBuildableConveyorLift',
  'FGBuildableDockingStation',
  'FGBuildableDroneStation',
  'FGBuildableFactory',
  'FGBuildableFactorySimpleProducer',
  'FGBuildableFloodlight',
  'FGBuildableFoundation',
  'FGBuildableFrackingActivator',
  'FGBuildableFrackingExtractor',
  'FGBuildableGeneratorFuel',
  'FGBuildableGeneratorGeoThermal',
  'FGBuildableGeneratorNuclear',
  'FGBuildableJumppad',
  'FGBuildableLadder',
  'FGBuildableLightSource',
  'FGBuildableLightsControlPanel',
  'FGBuildableMAM',
  'FGBuildableManufacturer',
  'FGBuildableManufacturerVariablePower',
  'FGBuildablePipeHyper',
  'FGBuildablePipeReservoir',
  'FGBuildablePipeline',
  'FGBuildablePipelineJunction',
  'FGBuildablePipelinePump',
  'FGBuildablePipelineSupport',
  'FGBuildablePole',
  'FGBuildablePowerPole',
  'FGBuildablePowerStorage',
  'FGBuildableRadarTower',
  'FGBuildableRailroadStation',
  'FGBuildableRailroadTrack',
  'FGBuildableResourceExtractor',
  'FGBuildableResourceSink',
  'FGBuildableResourceSinkShop',
  'FGBuildableSnowDispenser',
  'FGBuildableSpaceElevator',
  'FGBuildableSplitterSmart',
  'FGBuildableStair',
  'FGBuildableStorage',
  'FGBuildableTradingPost',
  'FGBuildableTrainPlatformCargo',
  'FGBuildableTrainPlatformEmpty',
  'FGBuildableWalkway',
  'FGBuildableWall',
  'FGBuildableWaterPump',
  'FGBuildableWire',
  'FGConveyorPoleStackable',
  'FGPipeHyperStart',
  'FGVehicleDescriptor',
];

const resourceExtractors = [
  'FGBuildableFrackingActivator',
  'FGBuildableFrackingExtractor',
  'FGBuildableResourceExtractor',
  'FGBuildableWaterPump',
];

const generators = [
  'FGBuildableGeneratorFuel',
  'FGBuildableGeneratorGeoThermal',
  'FGBuildableGeneratorNuclear',
];

const buildingDescriptors = [
  'FGBuildingDescriptor',
];

const itemDescriptors = [
  'FGConsumableDescriptor',
  'FGEquipmentDescriptor',
  'FGItemDescriptor',
  'FGItemDescriptorBiomass',
  'FGItemDescriptorNuclearFuel',
  'FGResourceDescriptor',
];

const recipes = [
  'FGRecipe',
];

const resources = [
  'FGResourceDescriptor'
];

const schematics = [
  'FGSchematic',
];

const categoryClassnames = {
  all,
  buildables,
  resourceExtractors,
  generators,
  buildingDescriptors,
  itemDescriptors,
  recipes,
  resources,
  schematics,
};

export default categoryClassnames;
