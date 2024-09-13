"use client";
import React, { useEffect, useState } from "react";
import { BiRupee } from "react-icons/bi";
import Modal from "./Modal";
import { toast } from "react-toastify";
import { ProposalView } from "@/app/functions/ServerFunctions";
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
const Quotations3 = ({ proposal_id }) => {
  const router=useRouter();
  
  const authState = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    CustomerID:'',
    Type:'',
    ProposalDate:'',
    solarWattage: '', //checked
    totalSolarPanelsCost: 0, //checked
    taxSlabSolarPanel: 0, //checked
    panelsQuantity: 0, //checked
    totalSystemCapacity: 0, //checked
    areaRequirement: 0, //checked
    panelsBrand: '', //checked
    panelTechnology: '', //checked
    solarInverterCapacity: '', //checked
    solarInverterCost: 0, //checked
    taxSlabInverter: 0, //checked
    solarInverterType: '', //checked
    solarInverterBrand: '', //checked
    batteryCapacity: 0, //checked
    batteryCost: 0,//checked
    taxSlabBatteryCapacity: 0,//checked
    batteryTechnology: '', //checked
    numberOfBatteries: '', //checked
    solarBatteryBrand: '', //checked 
    mountingStructureType: '', //checked
    mountingStructureCost: 0, //checked
    taxSlabMountingStructure: 0,//checked
    earthingSafety: '', //checked
    dcDistributionBox: '', //checked
    acDistributionBox: '', //checked
    dcCables: '', //checked
    acCables: '', //checked
    panelsWarranty: '', //checked
    inverterWarranty: '', //checked
    totalBOSCostdescription: "", //checked
    totalBOSCost: 0, //checked
    totalBOSCosttax: 0, //checked
    totalSystemCostDescription: "", //checked
    totalSystemCost: 0, //checked
    totalSystemCostTax: 0, //checked
    installationCostDescription: "", //checked
    installationCost: 0, //checked
    installationCostTax: 0, //checked
    netMeteringCostDescription: "", //checked
    netMeteringCost: 0, //checked
    taxSlabNetMetering: 0, //checked
    netMeteringLiaisonDescription: "", //checked
    netMeteringLiaisoningCost: 0, //checked
    taxSlabLiaisoningCost: 0, //checked

    totalProjectCostWithoutTax: 0, //checked
    taxAmount: 0, //checked
    totalProjectCostWithTax: 0,  //checked
    deliveryPeriod: '', //checked
    scopeOfMaintenance: '', //checked
    paymentTerms: '', //checked
    priceValidity: '', //checked
  });
  useEffect(()=>{
    const ViewProposal=async(proposalid)=>{
        const response= await ProposalView(proposalid);
        if (response.status===200){
            const data = response.data[0];
            setFormData({
                CustomerID:data.customer_id,
                Type: data.type,
                ProposalDate: data.date,
              solarWattage: data.photovoltaic_module_spec,
              totalSolarPanelsCost: parseFloat(data.photovoltaic_cost),
              taxSlabSolarPanel: parseFloat(data.photovoltaic_tax),
              panelsQuantity: parseInt(data.panels_qty),
              totalSystemCapacity: parseFloat(data.system_capacity),
              areaRequirement: parseFloat(data.area),
              panelsBrand: data.panels_brand,
              panelTechnology: data.panel_technology,
              solarInverterCapacity: parseFloat(data.inv_capacity),
              solarInverterCost: parseFloat(data.inv_cost),
              taxSlabInverter: parseFloat(data.inv_tax),
              solarInverterType: data.inv_type,
              solarInverterBrand: data.inv_brand,
              batteryCapacity: parseFloat(data.battery_capacity),
              batteryCost: parseFloat(data.battery_cost),
              taxSlabBatteryCapacity: parseFloat(data.battery_tax),
              batteryTechnology: data.battery_technology,
              numberOfBatteries: parseFloat(data.no_of_batteries),
              solarBatteryBrand: data.battery_brand,
              mountingStructureType: data.mounting_structure_type,
              mountingStructureCost: parseFloat(data.mounting_structure_cost),
              taxSlabMountingStructure: parseFloat(data.mounting_structure_tax),
              earthingSafety: data.earthing_safety,
              dcDistributionBox: data.dc_distribution_box,
              acDistributionBox: data.ac_distribution_box,
              dcCables: data.dc_cables,
              acCables: data.ac_cables,
              panelsWarranty: parseFloat(data.panels_warranty),
              inverterWarranty: parseFloat(data.inv_warranty),
              totalBOSCostdescription: data.total_bos_cost_spec,
              totalBOSCost: parseFloat(data.total_bos_cost),
              totalBOSCosttax: parseFloat(data.bos_tax),
              totalSystemCostDescription: data.total_system_cost_spec,
              totalSystemCost: parseFloat(data.total_system_cost),
              totalSystemCostTax: parseFloat(data.system_tax),
              installationCostDescription: data.total_install_cost_spec,
              installationCost: parseFloat(data.total_install_cost),
              installationCostTax: parseFloat(data.install_tax),
              netMeteringCostDescription: data.metering_cost_spec,
              netMeteringCost: parseFloat(data.metering_cost),
              taxSlabNetMetering: parseFloat(data.metering_tax),
              netMeteringLiaisonDescription: data.liasioning_cost_spec,
              netMeteringLiaisoningCost: parseFloat(data.liasioning_cost),
              taxSlabLiaisoningCost: parseFloat(data.liasioning_tax),
              totalProjectCostWithoutTax: parseFloat(data.tot_project_cost_exc_tax),
              taxAmount: parseFloat(data.tax),
              totalProjectCostWithTax: parseFloat(data.total_project_cost),
              deliveryPeriod: parseFloat(data.delivery_period),
              scopeOfMaintenance: data.scope_maintenance_services,
              paymentTerms: data.payment_terms,
              priceValidity: parseInt(data.price_validity)
            });
        }else{
            toast.error(response.Message)
        }
       
    }
    ViewProposal(proposal_id)

  },[])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [err, setErr] = useState([])
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateSystemCapacity = () => { //totalSystemCapacity
    const wattage = parseFloat(formData.solarWattage) || 0;
    const quantity = parseFloat(formData.panelsQuantity) || 0;
    const systemCapacity = (wattage * quantity) / 1000;
    // setFormData({
    //   ...formData,
    //   "totalSystemCapacity": systemCapacity.toFixed(2)
    // });
    return systemCapacity.toFixed(2);
  };


  const calculateTotalProjectCostWithoutTax = () => {
    const bosCost = parseFloat(formData.totalBOSCost) || 0;
    const systemCost = parseFloat(formData.totalSystemCost) || 0;
    const installationCost = parseFloat(formData.installationCost) || 0;
    const netMeteringCost = parseFloat(formData.netMeteringCost) || 0;
    const liaisoningCost = parseFloat(formData.netMeteringLiaisoningCost) || 0;
    const totalPanelsCost = (parseFloat(formData.totalSolarPanelsCost) || 0) * (parseFloat(formData.panelsQuantity) || 0);
    const invertercost = parseFloat(formData.solarInverterCost) || 0
    const totalBatteryCost = parseFloat(formData.batteryCost * formData.numberOfBatteries) || 0.00
    const mountingcost = parseFloat(formData.mountingStructureCost) || 0
    const totalWithoutTax = bosCost + systemCost + installationCost + netMeteringCost + liaisoningCost + totalPanelsCost + invertercost + totalBatteryCost + mountingcost
    return totalWithoutTax.toFixed(2);
  };

  const calculateTaxAmount = () => {
    const safeParse = (value) => isNaN(parseFloat(value)) ? 0 : parseFloat(value);

    const boscosttax = safeParse(formData.totalBOSCost) * safeParse(formData.totalBOSCosttax) / 100;
    const systemcosttax = safeParse(formData.totalSystemCost) * safeParse(formData.totalSystemCostTax) / 100;
    const taxinstallationCost = safeParse(formData.installationCost) * safeParse(formData.installationCostTax) / 100;
    const taxnetMeteringCost = safeParse(formData.netMeteringCost) * safeParse(formData.taxSlabNetMetering) / 100;
    const taxliaisoningCost = safeParse(formData.netMeteringLiaisoningCost) * safeParse(formData.taxSlabLiaisoningCost) / 100;
    const taxtotalPanelsTaxAmount = safeParse(formData.totalSolarPanelsCost) * safeParse(formData.panelsQuantity) * safeParse(formData.taxSlabSolarPanel) / 100;
    const taxsolarinvertertax = safeParse(formData.solarInverterCost) * safeParse(formData.taxSlabInverter) / 100;
    const totalBatteryCosttax = safeParse(formData.batteryCost) * safeParse(formData.numberOfBatteries) * safeParse(formData.taxSlabBatteryCapacity) / 100;
    const mountingCostTax = safeParse(formData.mountingStructureCost) * safeParse(formData.taxSlabMountingStructure) / 100;

    // Sum all tax amounts
    const taxAmount = (
      boscosttax +
      systemcosttax +
      taxinstallationCost +
      taxnetMeteringCost +
      taxliaisoningCost +
      taxtotalPanelsTaxAmount +
      taxsolarinvertertax +
      totalBatteryCosttax +
      mountingCostTax
    ).toFixed(2);

    return isNaN(taxAmount) ? "0.00" : taxAmount;
  };


  const calculateTotalProjectCostWithTax = () => {
    const totalWithoutTax = parseFloat(calculateTotalProjectCostWithoutTax()) || 0;
    const taxAmount = parseFloat(calculateTaxAmount()) || 0;
    const totalWithTax = totalWithoutTax + taxAmount;
    return totalWithTax.toFixed(2);
  };

  const handleSubmit = async () => {

    const systemCapacity = calculateSystemCapacity();
    const totalWithoutTax = calculateTotalProjectCostWithoutTax();
    const taxAmount = calculateTaxAmount();
    const totalWithTax = calculateTotalProjectCostWithTax();
    
    // Prepare the payload
    const payload = {
      customer_id: quotedetails[0].customer_id, // Assuming customer ID is static or fetched from another source
      type: quotedetails[0].type, // Assuming property type is static or fetched
      date: quotedetails[0].cr_date, // Assuming date is fetched dynamically
      photovoltaic_module_spec: formData.solarWattage, // Assuming static data
      photovoltaic_cost: formData.totalSolarPanelsCost,
      photovoltaic_tax: formData.taxSlabSolarPanel,
      panels_qty: formData.panelsQuantity,
      system_capacity: systemCapacity, // Using calculated value
      area: formData.areaRequirement,
      panels_brand: formData.panelsBrand,
      panel_technology: formData.panelTechnology,
      inv_capacity: formData.solarInverterCapacity,
      inv_cost: formData.solarInverterCost,
      inv_tax: formData.taxSlabInverter,
      inv_type: formData.solarInverterType,
      inv_brand: formData.solarInverterBrand,
      battery_capacity: formData.batteryCapacity,
      battery_cost: formData.batteryCost,
      battery_tax: formData.taxSlabBatteryCapacity,
      battery_technology: formData.batteryTechnology,
      no_of_batteries: formData.numberOfBatteries,
      battery_brand: formData.solarBatteryBrand,
      mounting_structure_type: formData.mountingStructureType,
      mounting_structure_cost: formData.mountingStructureCost,
      mounting_structure_tax: formData.taxSlabMountingStructure,
      earthing_safety: formData.earthingSafety,
      dc_distribution_box: formData.dcDistributionBox,
      ac_distribution_box: formData.acDistributionBox,
      dc_cables: formData.dcCables,
      ac_cables: formData.acCables,
      panels_warranty: formData.panelsWarranty,
      inv_warranty: formData.inverterWarranty,
      total_bos_cost_spec: formData.totalBOSCostdescription,
      total_bos_cost: formData.totalBOSCost,
      bos_tax: formData.totalBOSCosttax,
      total_system_cost_spec: formData.totalSystemCostDescription,
      total_system_cost: formData.totalSystemCost,
      system_tax: formData.totalSystemCostTax,
      total_install_cost_spec: formData.installationCostDescription,
      total_install_cost: formData.installationCost,
      install_tax: formData.installationCostTax,
      metering_cost_spec: formData.netMeteringCostDescription,
      metering_cost: formData.netMeteringCost,
      metering_tax: formData.taxSlabNetMetering,
      liasioning_cost_spec: formData.netMeteringLiaisonDescription,
      liasioning_cost: formData.netMeteringLiaisoningCost,
      liasioning_tax: formData.taxSlabLiaisoningCost,
      tot_project_cost_exc_tax: totalWithoutTax, // Using calculated value
      tax: taxAmount, // Using calculated value
      total_project_cost: totalWithTax, // Using calculated value
      delivery_period: formData.deliveryPeriod,
      scope_maintenance_services: formData.scopeOfMaintenance,
      payment_terms: formData.paymentTerms,
      price_validity: formData.priceValidity,
      installer_id: authState.userDetails.company_id // Assuming installer ID is static or fetched dynamically
    };
    console.log(payload);

  const response= await SaveProposal(payload)

if (response.Status==="Success"){
  toast.success("Proposal Submitted Successfully...")
  setTimeout(() => {
    router.push("/quotations")
  }, 2000);
}else{
  toast.error(response.Message)
}
  
  };
  const validateFormData = () => {
    let errors = {};

    if (formData.solarWattage === "") {
      errors.solarWattage = "Solar Wattage is required";
    }
    if (formData.totalSolarPanelsCost === 0) {
      errors.totalSolarPanelsCost = "Solar Panel Each cost is required";
    }
    if (formData.totalSolarPanelsCost > 0 && formData.taxSlabSolarPanel === 0) {
      errors.taxSlabSolarPanel = "Tax Slab for Solar Panels is required";
    }
    if (formData.panelsQuantity === 0) {
      errors.panelsQuantity = "Panels Quantity is required";
    }
    if (formData.areaRequirement <= 0) {
      errors.areaRequirement = "Area requirement is required";
    }
    if (formData.panelsBrand === "") {
      errors.panelsBrand = "Panels Brand is required";
    }
    if (formData.panelTechnology === "") {
      errors.panelTechnology = "Panel Technology is required";
    }
    if (formData.solarInverterCapacity <= 0) {
      errors.solarInverterCapacity = "Solar Inverter Capacity is required";
    }
    if (formData.solarInverterCost <= 0) {
      errors.solarInverterCost = "Solar Inverter Cost is required";
    }
    if (formData.solarInverterCost > 0 && formData.taxSlabInverter === 0) {
      errors.taxSlabInverter = "Solar Inverter Tax slab is required";
    }
    if (formData.solarInverterType === "") {
      errors.solarInverterType = "Solar Inverter Type is required";
    }
    if (formData.solarInverterBrand === "") {
      errors.solarInverterBrand = "Solar Inverter Brand is required";
    }
    if (formData.batteryCapacity === 0) {
      errors.batteryCapacity = "Battery Capacity is required";
    }
    if (formData.batteryCost === 0) {
      errors.batteryCost = "Battery Cost is required";
    }
    if (formData.batteryCost > 0 && formData.taxSlabBatteryCapacity === 0) {
      errors.taxSlabBatteryCapacity = "Battery Tax slab is required";
    }
    if (formData.batteryTechnology === "") {
      errors.batteryTechnology = "Battery Technology is required";
    }
    if (formData.numberOfBatteries === 0) {
      errors.numberOfBatteries = "Number of Batteries is required";
    }
    if (formData.solarBatteryBrand === "") {
      errors.solarBatteryBrand = "Solar Battery Brand is required";
    }
    if (formData.mountingStructureType === "") {
      errors.mountingStructureType = "Mounting Structure Type is required";
    }
    if (formData.mountingStructureCost === 0) {
      errors.mountingStructureCost = "Mounting Structure Cost is required";
    }
    if (formData.mountingStructureCost > 0 && formData.taxSlabMountingStructure === 0) {
      errors.taxSlabMountingStructure = "Mounting Structure Tax slab is required";
    }
    if (formData.earthingSafety === "") {
      errors.earthingSafety = "Earthing Safety is required";
    }
    if (formData.dcDistributionBox === "") {
      errors.dcDistributionBox = "DC Distribution Box details are required";
    }
    if (formData.acDistributionBox === "") {
      errors.acDistributionBox = "AC Distribution Box details are required";
    }
    if (formData.dcCables === "") {
      errors.dcCables = "DC Cables details are required";
    }
    if (formData.acCables === "") {
      errors.acCables = "AC Cables details are required";
    }
    if (formData.panelsWarranty === 0) {
      errors.panelsWarranty = "Panels Warranty is required";
    }
    if (formData.inverterWarranty === 0) {
      errors.inverterWarranty = "Inverter Warranty is required";
    }
    if (formData.totalBOSCostdescription === "") {
      errors.totalBOSCostdescription = "Total BOS Cost Description is required";
    }
    if (formData.totalBOSCost === 0) {
      errors.totalBOSCost = "Total BOS Cost is required";
    }
    if (formData.totalBOSCost > 0 && formData.totalBOSCosttax === 0) {
      errors.totalBOSCosttax = "Total BOS Cost Tax slab is required";
    }
    if (formData.totalSystemCostDescription === "") {
      errors.totalSystemCostDescription = "Total System Cost Description is required";
    }
    if (formData.totalSystemCost === 0) {
      errors.totalSystemCost = "Total System Cost is required";
    }
    if (formData.totalSystemCost > 0 && formData.totalSystemCostTax === 0) {
      errors.totalSystemCostTax = "Total System Cost Tax slab is required";
    }
    if (formData.installationCostDescription === "") {
      errors.installationCostDescription = "Installation Cost Description is required";
    }
    if (formData.installationCost === 0) {
      errors.installationCost = "Installation Cost is required";
    }
    if (formData.installationCost > 0 && formData.installationCostTax === 0) {
      errors.installationCostTax = "Installation Cost Tax slab is required";
    }
    if (formData.netMeteringCostDescription === "") {
      errors.netMeteringCostDescription = "Net Metering Cost Description is required";
    }
    if (formData.netMeteringCost === 0) {
      errors.netMeteringCost = "Net Metering Cost is required";
    }
    if (formData.netMeteringCost > 0 && formData.taxSlabNetMetering === 0) {
      errors.taxSlabNetMetering = "Net Metering Cost Tax slab is required";
    }
    if (formData.netMeteringLiaisonDescription === "") {
      errors.netMeteringLiaisonDescription = "Net Metering Liaison Cost Description is required";
    }
    if (formData.netMeteringLiaisoningCost === 0) {
      errors.netMeteringLiaisoningCost = "Net Metering Liaisoning Cost is required";
    }
    if (formData.netMeteringLiaisoningCost > 0 && formData.taxSlabLiaisoningCost === 0) {
      errors.taxSlabLiaisoningCost = "Net Metering Liaisoning Cost Tax slab is required";
    }
   
    if (formData.deliveryPeriod === 0) {
      errors.deliveryPeriod = "Delivery Period is required";
    }
    if (formData.scopeOfMaintenance === "") {
      errors.scopeOfMaintenance = "Scope of Maintenance is required";
    }
    if (formData.paymentTerms === "") {
      errors.paymentTerms = "Payment Terms are required";
    }
    if (formData.priceValidity === 0) {
      errors.priceValidity = "Price Validity Period is required";
    }

    return errors;
  };

  const handleOpenModal = () => {
    const errors = validateFormData();
    setErr(errors)
if (Object.keys(errors).length !== 0){
  return
}
   
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //   const handleSubmit = () => {
  //     setIsModalOpen(false);
  //     // Add your submit logic here
  //     alert("Form Submitted Successfully!");
  //   };

  return (
    <div className="border border-gray-400 rounded-md">
      <div className="flex items-center justify-between p-2 border-b border-b-[#4348BD]">
        <div className="space-y-1">
          <h5 className="text-[12px]">Quote No</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">{formData.CustomerID}</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Customer Name</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">XXXXX</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Property Type</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">
            {formData.Type}
          </p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Proposal Date</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">{new Date(formData.ProposalDate).toLocaleDateString('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})}</p>
        </div>
       
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
      {/*----top-section---*/}
      <div className="p-3">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-100 text-[#7A7A7A] text-[13px] font-[400] text-left">
              <th className="p-2">Components</th>
              <th className="p-2">Technical Specification</th>
              <th className="p-2">Total Cost (Without Tax)</th>
              <th className="p-2">Tax Slab</th>
            </tr>
          </thead>
          <tbody>
            {/*----first row data---*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>Solar Photovoltaic Module (Panels) (W/Units)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="solarWattage"
                    type="number"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.solarWattage}
                    onChange={handleInputChange}
                    placeholder="Enter W/Unit"
                  />
                  {err.solarWattage && <p className="text-red-600">{err.solarWattage}</p>}
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="totalSolarPanelsCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.totalSolarPanelsCost}
                    onChange={handleInputChange}
                    placeholder="Enter Amount"
                  />
                  {err.totalSolarPanelsCost && <p className="text-red-600">{err.totalSolarPanelsCost}</p>}
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="taxSlabSolarPanel"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.taxSlabSolarPanel}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.taxSlabSolarPanel && <p className="text-red-600">{err.taxSlabSolarPanel}</p>}

                </div>
              </td>
            </tr>
            {/*----second row----*/}
            <tr className="bg-[#D4DCFF] py-4">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>Panels Quantity</span>
                </div>
              </td>

              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="panelsQuantity"
                    type="number"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                    value={formData.panelsQuantity}
                    onChange={handleInputChange}
                    placeholder="Enter Quantity"
                  />
                  {err.panelsQuantity && <p className="text-red-600">{err.panelsQuantity}</p>}

                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----3rd row----*/}
            <tr className="">
              <td className="py-4">
                <div className="text-[14px]">
                  <span>System Capacity(kW)*</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                  <span className="font-[900] text-22 text-[#4348BC]">
                    {calculateSystemCapacity()}
                  </span>
                </div>
              </td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
            {/*----4th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="my-2">
                      <span>Area Requirement</span>
                    </div>
                  </span>
                </div>
              </td>

              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="areaRequirement"
                    type="number"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                    value={formData.areaRequirement}
                    onChange={handleInputChange}
                    placeholder="Enter Value"
                  />
                  {err.areaRequirement && <p className="text-red-600">{err.areaRequirement}</p>}

                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----5th row----*/}
            <tr className="py-4">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="my-2">
                      <span>Panels Brand</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                 <textarea
disabled
                    name="panelsBrand"
                    className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] resize-none"
                    value={formData.panelsBrand}
                    onChange={handleInputChange}
                    placeholder="Enter Brand"
                  />
                  {err.panelsBrand && <p className="text-red-600">{err.panelsBrand}</p>}

                </div>
              </td>
              <td></td> {/* Empty cell */}
            </tr>
            {/*----6th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Panel Technology</span>
                    </div>
                  </span>
                </div>
              </td>

              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="panelTechnology"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF]"
                    value={formData.panelTechnology}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Technology</option>
                    <option value="Monocrystalline">Monocrystalline</option>
                    <option value="Polycrystalline">Polycrystalline</option>
                    <option value="Thin Film">Thin Film</option>
                  </select>
                  {err.panelTechnology && <p className="text-red-600">{err.panelTechnology}</p>}
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*--Solar Inverter Capacity---*--*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>Solar Inverter Capacity(In kW)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="solarInverterCapacity"
                    type="number"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.solarInverterCapacity}
                    onChange={handleInputChange}
                    placeholder="Enter Capacity"
                  />
                  {err.solarInverterCapacity && <p className="text-red-600">{err.solarInverterCapacity}</p>}
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="solarInverterCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.solarInverterCost}
                    onChange={handleInputChange}
                    placeholder="Enter Amount"
                  />
                  {err.solarInverterCost && <p className="text-red-600">{err.solarInverterCost}</p>}
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="taxSlabInverter"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.taxSlabInverter}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.taxSlabInverter && <p className="text-red-600">{err.taxSlabInverter}</p>}
                </div>
              </td>
            </tr>

            {/*----8th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Solar Inverter Type</span>
                    </div>
                  </span>
                </div>
              </td>

              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="solarInverterType"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF]"
                    value={formData.solarInverterType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Type</option>
                    <option value="String Inverter">String Inverter</option>
                    <option value="Central Inverter">Central Inverter</option>
                    <option value="Micro Inverter">Micro Inverter</option>
                  </select>
                  {err.solarInverterType && <p className="text-red-600">{err.solarInverterType}</p>}
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----9th row----*/}
            <tr className="py-4">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="my-2">
                      <span>Solar Inverter Brand</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                 <textarea
disabled
                    name="solarInverterBrand"
                    className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] resize-none"
                    value={formData.solarInverterBrand} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Brand"
                  />
                  {err.solarInverterBrand && <p className="text-red-600">{err.solarInverterBrand}</p>}

                </div>
              </td>
              <td></td> {/* Empty cell */}
            </tr>
            {/*----10th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Battery Capacity(In AH)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="batteryCapacity"
                    type="number"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                    value={formData.batteryCapacity} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Capacity"
                  />
                  {err.batteryCapacity && <p className="text-red-600">{err.batteryCapacity}</p>}
                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="batteryCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                    value={formData.batteryCost}
                    onChange={handleInputChange}
                    placeholder="Enter Amount"
                  />
                  {err.batteryCost && <p className="text-red-600">{err.batteryCost}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="taxSlabBatteryCapacity"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF]"
                    value={formData.taxSlabBatteryCapacity} //checked
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.taxSlabBatteryCapacity && <p className="text-red-600">{err.taxSlabBatteryCapacity}</p>}

                </div>
              </td>
            </tr>
            {/*----11th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Battery Technology</span>
                    </div>
                  </span>
                </div>
              </td>

              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="batteryTechnology"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF]"
                    value={formData.batteryTechnology}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Battery Technology</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                  {err.batteryTechnology && <p className="text-red-600">{err.batteryTechnology}</p>}

                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----12th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>Number of Batteries</span>
                </div>
              </td>
              <td className="p-2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="">
                 <input
disabled
                    name="numberOfBatteries"
                    type="number"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                    value={formData.numberOfBatteries} //checked
                    onChange={handleInputChange}
                    placeholder="Enter No. of Batteries"
                  />
                  {err.numberOfBatteries && <p className="text-red-600">{err.numberOfBatteries}</p>}

                </div>
              </td>
              <td></td>
              <td></td> {/* Empty cell */}
            </tr>
            {/*----13th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Solar Battery Brand</span>
                    </div>
                  </span>
                </div>
              </td>

              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="solarBatteryBrand"
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                    value={formData.solarBatteryBrand} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Solar Battery Brand"
                  />
                  {err.solarBatteryBrand && <p className="text-red-600">{err.solarBatteryBrand}</p>}
                </div>
              </td>
              <td></td>
              <td></td>
            </tr>
            {/*----14th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Module Mounting structure Type</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="mountingStructureType"
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.mountingStructureType} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Type"
                  />
                  {err.mountingStructureType && <p className="text-red-600">{err.mountingStructureType}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="mountingStructureCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.mountingStructureCost}
                    onChange={handleInputChange}
                    placeholder="Enter Amount"
                  />
                  {err.mountingStructureCost && <p className="text-red-600">{err.mountingStructureCost}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="taxSlabMountingStructure"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.taxSlabMountingStructure}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.taxSlabMountingStructure && <p className="text-red-600">{err.taxSlabMountingStructure}</p>}

                </div>
              </td>
            </tr>
            {/*----15th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Earthing Safety</span>
                    </div>
                  </span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="earthingSafety"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF]"
                    value={formData.earthingSafety} //checked
                    onChange={handleInputChange}
                  >
                    <option value="">Select Value</option>
                    <option value="Included">Included</option>
                    <option value="Not Included">Not Included</option>
                  </select>
                  {err.earthingSafety && <p className="text-red-600">{err.earthingSafety}</p>}

                </div>
              </td>

              <td></td>
              <td>
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>
            {/*----16th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>DC Distribution Box</span>
                </div>
              </td>

              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                 <textarea
disabled
                    name="dcDistributionBox"
                    className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                    value={formData.dcDistributionBox} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.dcDistributionBox && <p className="text-red-600">{err.dcDistributionBox}</p>}

                </div>
              </td>

              <td className="p-2">
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>
            {/*----17th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>AC Distribution Box</span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                 <textarea
disabled
                    name="acDistributionBox"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                    value={formData.acDistributionBox} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.acDistributionBox && <p className="text-red-600">{err.acDistributionBox}</p>}

                </div>
              </td>
              <td className="p-2">
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>
            {/*----18th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>DC Cables(upto 50 mts.)**</span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                 <textarea
disabled
                    name="dcCables"
                    className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                    value={formData.dcCables} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.dcCables && <p className="text-red-600">{err.dcCables}</p>}

                </div>
              </td>
              <td className="p-2">
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>
            {/*----19th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>AC Cables(upto 20 mts.)**</span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                 <textarea
disabled
                    name="acCables"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                    value={formData.acCables} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.acCables && <p className="text-red-600">{err.acCables}</p>}

                </div>
              </td>
              <td className="p-2">
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>
            {/*----20th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Panels Warranty (In Years)</span>
                </div>
              </td>
              <td></td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="panelsWarranty"
                    type="number"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.panelsWarranty} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Warranty"
                  />
                  {err.panelsWarranty && <p className="text-red-600">{err.panelsWarranty}</p>}

                </div>
              </td>

              <td className="p-2"></td>
            </tr>
            {/*----21st row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Inverter Warranty (In Years)</span>
                </div>
              </td>
              <td></td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="inverterWarranty"
                    type="number"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                    value={formData.inverterWarranty} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Warranty"

                  />
                  {err.inverterWarranty && <p className="text-red-600">{err.inverterWarranty}</p>}

                </div>
              </td>

              <td className="p-2"></td>
            </tr>
            {/*----22nd row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Total BOS Cost</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="totalBOSCostdescription"
                    type="text"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                    value={formData.totalBOSCostdescription} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Warranty"
                  />
                  {err.totalBOSCostdescription && <p className="text-red-600">{err.totalBOSCostdescription}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="totalBOSCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.totalBOSCost}
                    onChange={handleInputChange}

                  />
                  {err.totalBOSCost && <p className="text-red-600">{err.totalBOSCost}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="totalBOSCosttax"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.totalBOSCosttax} //checked
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.totalBOSCosttax && <p className="text-red-600">{err.totalBOSCosttax}</p>}
                </div>
              </td>
            </tr>
            {/*----23rd row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Total System Cost</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="totalSystemCostDescription"
                    type="text"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                    value={formData.totalSystemCostDescription} //change
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.totalSystemCostDescription && <p className="text-red-600">{err.totalSystemCostDescription}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="totalSystemCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                    value={formData.totalSystemCost}  //checked
                    onChange={handleInputChange}
                    placeholder="Enter System Cost"
                  />
                  {err.totalSystemCost && <p className="text-red-600">{err.totalSystemCost}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="totalSystemCostTax"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.totalSystemCostTax} //checked
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.totalSystemCostTax && <p className="text-red-600">{err.totalSystemCostTax}</p>}

                </div>
              </td>
            </tr>
            {/*----24th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Installation Cost****</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="installationCostDescription"
                    type="text"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                    value={formData.installationCostDescription}
                    onChange={handleInputChange} //checked
                    placeholder="Enter Description"
                  />
                  {err.installationCostDescription && <p className="text-red-600">{err.installationCostDescription}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="installationCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.installationCost} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Cost"
                  />
                  {err.installationCost && <p className="text-red-600">{err.installationCost}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="installationCostTax"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.installationCostTax} //checked
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.installationCostTax && <p className="text-red-600">{err.installationCostTax}</p>}

                </div>
              </td>
            </tr>
            {/*----25th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Net Metering Cost</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="netMeteringCostDescription"
                    type="text"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                    value={formData.netMeteringCostDescription} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.netMeteringCostDescription && <p className="text-red-600">{err.netMeteringCostDescription}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="netMeteringCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                    value={formData.netMeteringCost} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Cost"
                  />
                  {err.netMeteringCost && <p className="text-red-600">{err.netMeteringCost}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="taxSlabNetMetering"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.taxSlabNetMetering} //checked
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.taxSlabNetMetering && <p className="text-red-600">{err.taxSlabNetMetering}</p>}

                </div>
              </td>
            </tr>
            {/*----26th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Net Metering Liasioning Cost</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="netMeteringLiaisonDescription"
                    type="text"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.netMeteringLiaisonDescription} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.netMeteringLiaisonDescription && <p className="text-red-600">{err.netMeteringLiaisonDescription}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="relative">
                  {/* Rupee symbol positioned inside the input field */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                    <BiRupee size={16} />
                  </span>
                 <input
disabled
                    name="netMeteringLiaisoningCost"
                    type="number"
                    className="pl-10 border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.netMeteringLiaisoningCost} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Cost"
                  />
                  {err.netMeteringLiaisoningCost && <p className="text-red-600">{err.netMeteringLiaisoningCost}</p>}

                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <select
disabled
                    name="taxSlabLiaisoningCost"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.taxSlabLiaisoningCost} //checked
                    onChange={handleInputChange}
                  >
                    <option value="">Select Tax Slab</option>
                    <option value="5">5%</option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                  {err.taxSlabLiaisoningCost && <p className="text-red-600">{err.taxSlabLiaisoningCost}</p>}

                </div>
              </td>
            </tr>
            {/*----27th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Total Project Cost(exclusive of Tax)</span>
                    </div>
                  </span>
                </div>
              </td>
              <td></td>
              <td className="p-2">
                <div className="">
                  <p className="flex text-xl font-[700] text-[#4348BD]">
                    <BiRupee className="mt-[3px]" />
                   <input
disabled
                      name="totalProjectCostWithoutTax" //checked
                      type="number"
                      className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md text-right"
                      value={calculateTotalProjectCostWithoutTax()}
                      readOnly
                    />

                  </p>
                </div>
              </td>
              <td></td>
            </tr>
            {/*----28th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Tax</span>
                    </div>
                  </span>
                </div>
              </td>
              <td></td>
              <td className="p-2">
                <div className="">
                  <p className="flex text-xl font-[700] text-[#4348BD]">
                    <BiRupee className="mt-[3px]" /><input
disabled
                      name="taxAmount"
                      type="number"
                      className="border border-[#7A7A7A] p-2 w-full rounded-md text-right"
                      value={calculateTaxAmount()} //checked
                      readOnly
                    />

                  </p>
                </div>
              </td>
              <td></td>
            </tr>
            {/*----29th row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px]">
                  <span>
                    <div className="">
                      <span>Total Project Cost</span>
                    </div>
                  </span>
                </div>
              </td>
              <td></td>
              <td className="p-2">
                <div className="">
                  <p className="flex text-xl font-[700] text-[#4348BD]">
                    <BiRupee className="mt-[3px]" /> <input
disabled
                      name="totalProjectCostWithTax"
                      type="number"
                      className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md text-right"
                      value={calculateTotalProjectCostWithTax()} //checked
                      readOnly
                    />

                  </p>
                </div>
              </td>
              <td></td>
            </tr>
            {/*----30th row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Delivery Period (In Days)</span>
                </div>
              </td>

              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="deliveryPeriod"
                    type="number"
                    className="border border-[#7A7A7A] p-2 w-full rounded-md"
                    value={formData.deliveryPeriod}
                    onChange={handleInputChange}
                    placeholder="Enter Days"
                  />
                  {err.deliveryPeriod && <p className="text-red-600">{err.deliveryPeriod}</p>}

                </div>
              </td>
              <td></td>
              <td className="p-2"></td>
            </tr>
            {/*----31st row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Scope Of Maintenance Services</span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                 <textarea
disabled
                    name="scopeOfMaintenance"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                    value={formData.scopeOfMaintenance} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.scopeOfMaintenance && <p className="text-red-600">{err.scopeOfMaintenance}</p>}

                </div>
              </td>
              <td className="p-2"></td>
            </tr>
            {/*----32nd row----*/}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>payment Terms</span>
                </div>
              </td>
              <td className="p-2" colSpan="2">
                {/* Spans across the 2nd and 3rd columns */}
                <div className="my-2">
                 <textarea
disabled
                    name="paymentTerms"
                    className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                    value={formData.paymentTerms} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Description"
                  />
                  {err.paymentTerms && <p className="text-red-600">{err.paymentTerms}</p>}

                </div>
              </td>
              <td className="p-2"></td>
            </tr>
            {/*----33- row----*/}
            <tr className="">
              <td className="p-2">
                <div className="text-[14px] my-2">
                  <span>Price Validity (In Days)</span>
                </div>
              </td>
              <td className="p-2">
                <div className="">
                 <input
disabled
                    name="priceValidity"
                    type="number"
                    className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                    value={formData.priceValidity} //checked
                    onChange={handleInputChange}
                    placeholder="Enter Days"
                  />
                            {err.priceValidity && <p className="text-red-600">{err.priceValidity}</p>}

                </div>
              </td>
              <td className="p-2"></td>
              <td className="p-2">
                <p className="text-14px font-[500]">Minimum 30 Days</p>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="border border-gray-300 p-2 space-y-3 mx-2">
        <p className="text-[#4348BD] font-[600] text-[14px]">
          * This is based on the information Provided.Accurate details Will be
          provided after Site Visit
        </p>
        <p className="text-[#4348BD] font-[600] text-[14px]">
          ** Cables over and above the mentioned quantity will be charged
          separately
        </p>
        <p className="text-[#4348BD] font-[600] text-[14px]">
          *** This is tentative and subject to variation by +/- 5%. Final quote
          will be provided after site visit.
        </p>
      </div>
    </div>
  );
};

export default Quotations3;