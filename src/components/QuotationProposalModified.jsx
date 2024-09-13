"use client";
import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import Modal from "./Modal";

const Quotations3 = ({ quotedetails }) => {
  const [formData, setFormData] = useState({
    solarWattage: '',
    panelsQuantity: '',
    systemCapacity: '',
    areaRequirement: '',
    panelsBrand: '',
    panelTechnology: '',
    solarInverterCapacity: '',
    solarInverterType: '',
    solarInverterBrand: '',
    batteryCapacity: '',
    batteryTechnology: '',
    numberOfBatteries: '',
    solarBatteryBrand: '',
    mountingStructureType: '',
    earthingSafety: '',
    dcDistributionBox: '',
    acDistributionBox: '',
    dcCables: '',
    acCables: '',
    panelsWarranty: '',
    inverterWarranty: '',
    totalBOSCost: '',
    totalSystemCost: '',
    installationCost: '',
    netMeteringCost: '',
    netMeteringLiaisoningCost: '',
    totalProjectCostWithoutTax: 0,
    taxAmount: 0,
    totalProjectCostWithTax: 0,
    deliveryPeriod: '',
    scopeOfMaintenance: '',
    paymentTerms: '',
    priceValidity: '',
    taxSlabSolarPanel: '',
    taxSlabInverter: '',
    taxSlabMountingStructure: '',
    taxSlabBatteryCapacity: '',
    taxSlabInstallationCost: '',
    taxSlabNetMetering: '',
    taxSlabLiaisoningCost: '',
    taxPercentage: 0
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateSystemCapacity = () => {
    const wattage = parseFloat(formData.solarWattage) || 0;
    const quantity = parseFloat(formData.panelsQuantity) || 0;
    const systemCapacity = (wattage * quantity) / 1000;
    return systemCapacity.toFixed(2);
  };

  const calculateTotalBOSCost = () => {
    const installationCost = parseFloat(formData.installationCost) || 0;
    const netMeteringCost = parseFloat(formData.netMeteringCost) || 0;
    const liaisoningCost = parseFloat(formData.netMeteringLiaisoningCost) || 0;
    const bosCost = installationCost + netMeteringCost + liaisoningCost;
    return bosCost.toFixed(2);
  };

  const calculateTotalProjectCostWithoutTax = () => {
    const bosCost = parseFloat(calculateTotalBOSCost()) || 0;
    const systemCost = parseFloat(formData.totalSystemCost) || 0;
    const totalWithoutTax = bosCost + systemCost;
    return totalWithoutTax.toFixed(2);
  };

  const calculateTaxAmount = () => {
    const totalWithoutTax = parseFloat(calculateTotalProjectCostWithoutTax()) || 0;
    const taxPercentage = parseFloat(formData.taxPercentage) || 0;
    const taxAmount = (totalWithoutTax * taxPercentage) / 100;
    return taxAmount.toFixed(2);
  };

  const calculateTotalProjectCostWithTax = () => {
    const totalWithoutTax = parseFloat(calculateTotalProjectCostWithoutTax()) || 0;
    const taxAmount = parseFloat(calculateTaxAmount()) || 0;
    const totalWithTax = totalWithoutTax + taxAmount;
    return totalWithTax.toFixed(2);
  };

  const handleSubmit = () => {
    const systemCapacity = calculateSystemCapacity();
    const totalBOSCost = calculateTotalBOSCost();
    const totalWithoutTax = calculateTotalProjectCostWithoutTax();
    const taxAmount = calculateTaxAmount();
    const totalWithTax = calculateTotalProjectCostWithTax();

    alert(`System Capacity: ${systemCapacity}\nTotal BOS Cost: ${totalBOSCost}\nTotal Without Tax: ${totalWithoutTax}\nTax: ${taxAmount}\nTotal With Tax: ${totalWithTax}`);
  };

  return (
    <div className="border border-gray-400 rounded-md">
      <div className="flex items-center justify-between p-2 border-b border-b-[#4348BD]">
        <div className="space-y-1">
          <h5 className="text-[12px]">Quote No</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">{quotedetails[0].customer_id}</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Customer Name</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">XXXXX</p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Property Type</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">
            {quotedetails[0].type}
          </p>
        </div>
        <div className="">
          <h5 className="text-[12px]">Date</h5>
          <p className="text-[#4348BD] text-[14px] font-[500]">{quotedetails[0].cr_date}</p>
        </div>
        <div className="">
          <button
            className="bg-[#0BB68D] rounded-md text-white text-[14px] py-2 px-5"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      {/* Form Fields */}
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
            {/* Solar Panel */}
            <tr>
              <td className="p-2">Solar Photovoltaic Module (Panels)</td>
              <td className="p-2">
                <input
                  name="solarWattage"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.solarWattage}
                  onChange={handleInputChange}
                  placeholder="Enter W/Unit"
                />
              </td>
              <td className="p-2">
                <input
                  name="totalSystemCost"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.totalSystemCost}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                />
              </td>
              <td className="p-2">
                <select
                  name="taxSlabSolarPanel"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.taxSlabSolarPanel}
                  onChange={handleInputChange}
                >
                  <option value="">Select Tax Slab</option>
                  <option value="5%">5%</option>
                  <option value="12%">12%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                </select>
              </td>
            </tr>

            {/* Panels Quantity */}
            <tr className="bg-[#D4DCFF] py-4">
              <td className="p-2">Panels Quantity</td>
              <td className="p-2">
                <input
                  name="panelsQuantity"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                  value={formData.panelsQuantity}
                  onChange={handleInputChange}
                  placeholder="Enter Quantity"
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Other Components */}
            <tr>
              <td className="p-2">System Capacity (kW)</td>
              <td className="p-2">
                <span className="font-[900] text-22 text-[#4348BC]">
                  {calculateSystemCapacity()}
                </span>
              </td>
              <td></td>
              <td></td>
            </tr>

            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Area Requirement</td>
              <td className="p-2">
                <input
                  name="areaRequirement"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                  value={formData.areaRequirement}
                  onChange={handleInputChange}
                  placeholder="Enter Value"
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Panels Brand */}
            <tr>
              <td className="p-2">Panels Brand</td>
              <td className="p-2" colSpan="2">
                <textarea
                  name="panelsBrand"
                  className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] resize-none"
                  value={formData.panelsBrand}
                  onChange={handleInputChange}
                  placeholder="Enter Brand"
                />
              </td>
              <td></td>
            </tr>

            {/* Panel Technology */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Panel Technology</td>
              <td className="p-2">
                <select
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
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Solar Inverter Capacity */}
            <tr>
              <td className="p-2">Solar Inverter Capacity (In kW)</td>
              <td className="p-2">
                <input
                  name="solarInverterCapacity"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.solarInverterCapacity}
                  onChange={handleInputChange}
                  placeholder="Enter Capacity"
                />
              </td>
              <td className="p-2">
                <input
                  name="solarInverterCost"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.solarInverterCost}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                />
              </td>
              <td className="p-2">
                <select
                  name="taxSlabInverter"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.taxSlabInverter}
                  onChange={handleInputChange}
                >
                  <option value="">Select Tax Slab</option>
                  <option value="5%">5%</option>
                  <option value="12%">12%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                </select>
              </td>
            </tr>

            {/* Solar Inverter Type */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Solar Inverter Type</td>
              <td className="p-2">
                <select
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
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Solar Inverter Brand */}
            <tr>
              <td className="p-2">Solar Inverter Brand</td>
              <td className="p-2" colSpan="2">
                <textarea
                  name="solarInverterBrand"
                  className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] resize-none"
                  value={formData.solarInverterBrand}
                  onChange={handleInputChange}
                  placeholder="Enter Brand"
                />
              </td>
              <td></td>
            </tr>

            {/* Battery Capacity */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Battery Capacity (In AH)</td>
              <td className="p-2">
                <input
                  name="batteryCapacity"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                  value={formData.batteryCapacity}
                  onChange={handleInputChange}
                  placeholder="Enter Capacity"
                />
              </td>
              <td className="p-2">
                <input
                  name="batteryCost"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                  value={formData.batteryCost}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                />
              </td>
              <td className="p-2">
                <select
                  name="taxSlabBatteryCapacity"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF]"
                  value={formData.taxSlabBatteryCapacity}
                  onChange={handleInputChange}
                >
                  <option value="">Select Tax Slab</option>
                  <option value="5%">5%</option>
                  <option value="12%">12%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                </select>
              </td>
            </tr>

            {/* Number of Batteries */}
            <tr>
              <td className="p-2">Number of Batteries</td>
              <td className="p-2">
                <input
                  name="numberOfBatteries"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.numberOfBatteries}
                  onChange={handleInputChange}
                  placeholder="Enter Quantity"
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Solar Battery Brand */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Solar Battery Brand</td>
              <td className="p-2">
                <input
                  name="solarBatteryBrand"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF] placeholder-[#7A7A7A]"
                  value={formData.solarBatteryBrand}
                  onChange={handleInputChange}
                  placeholder="Enter Brand"
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Module Mounting Structure Type */}
            <tr>
              <td className="p-2">Module Mounting Structure Type</td>
              <td className="p-2">
                <input
                  name="mountingStructureType"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.mountingStructureType}
                  onChange={handleInputChange}
                  placeholder="Enter Type"
                />
              </td>
              <td className="p-2">
                <input
                  name="mountingStructureCost"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.mountingStructureCost}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                />
              </td>
              <td className="p-2">
                <select
                  name="taxSlabMountingStructure"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.taxSlabMountingStructure}
                  onChange={handleInputChange}
                >
                  <option value="">Select Tax Slab</option>
                  <option value="5%">5%</option>
                  <option value="12%">12%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                </select>
              </td>
            </tr>

            {/* Earthing Safety */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Earthing Safety</td>
              <td className="p-2">
                <select
                  name="earthingSafety"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md bg-[#D4DCFF]"
                  value={formData.earthingSafety}
                  onChange={handleInputChange}
                >
                                   <option value="">Select Value</option>
                  <option value="Included">Included</option>
                  <option value="Not Included">Not Included</option>
                </select>
              </td>
              <td></td>
              <td>
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>

            {/* DC Distribution Box */}
            <tr>
              <td className="p-2">DC Distribution Box</td>
              <td className="p-2" colSpan="2">
                <textarea
                  name="dcDistributionBox"
                  className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                  value={formData.dcDistributionBox}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </td>
              <td>
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>

            {/* AC Distribution Box */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">AC Distribution Box</td>
              <td className="p-2" colSpan="2">
                <textarea
                  name="acDistributionBox"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                  value={formData.acDistributionBox}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </td>
              <td>
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>

            {/* DC Cables */}
            <tr>
              <td className="p-2">DC Cables (upto 50 mts.)</td>
              <td className="p-2" colSpan="2">
                <textarea
                  name="dcCables"
                  className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                  value={formData.dcCables}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </td>
              <td>
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>

            {/* AC Cables */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">AC Cables (upto 20 mts.)</td>
              <td className="p-2" colSpan="2">
                <textarea
                  name="acCables"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                  value={formData.acCables}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </td>
              <td>
                <p className="text-yellow-600 font-[600] text-[14px] p-2">
                  Covered in Total BOS Cost
                </p>
              </td>
            </tr>

            {/* Panels Warranty */}
            <tr>
              <td className="p-2">Panels Warranty (In Years)</td>
              <td className="p-2">
                <input
                  name="panelsWarranty"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.panelsWarranty}
                  onChange={handleInputChange}
                  placeholder="Enter Warranty"
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Inverter Warranty */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Inverter Warranty (In Years)</td>
              <td className="p-2">
                <input
                  name="inverterWarranty"
                  type="text"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                  value={formData.inverterWarranty}
                  onChange={handleInputChange}
                  placeholder="Enter Warranty"
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Total BOS Cost */}
            <tr>
              <td className="p-2">Total BOS Cost</td>
              <td className="p-2">
                <input
                  name="totalBOSCost"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={calculateTotalBOSCost()}
                  readOnly
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Total System Cost */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Total System Cost</td>
              <td className="p-2">
                <input
                  name="totalSystemCost"
                  type="text"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                  value={formData.totalSystemCost}
                  onChange={handleInputChange}
                  placeholder="Enter System Cost"
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Installation Cost */}
            <tr>
              <td className="p-2">Installation Cost</td>
              <td className="p-2">
                <input
                  name="installationCost"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.installationCost}
                  onChange={handleInputChange}
                  placeholder="Enter Cost"
                />
              </td>
              <td className="p-2">
                <select
                  name="taxSlabInstallationCost"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.taxSlabInstallationCost}
                  onChange={handleInputChange}
                >
                  <option value="">Select Tax Slab</option>
                  <option value="5%">5%</option>
                  <option value="12%">12%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                </select>
              </td>
              <td></td>
            </tr>

            {/* Net Metering Cost */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Net Metering Cost</td>
              <td className="p-2">
                <input
                  name="netMeteringCost"
                  type="text"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                  value={formData.netMeteringCost}
                  onChange={handleInputChange}
                  placeholder="Enter Cost"
                />
              </td>
              <td className="p-2">
                <select
                  name="taxSlabNetMetering"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                  value={formData.taxSlabNetMetering}
                  onChange={handleInputChange}
                >
                  <option value="">Select Tax Slab</option>
                  <option value="5%">5%</option>
                  <option value="12%">12%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                </select>
              </td>
              <td></td>
            </tr>

            {/* Net Metering Liaisoning Cost */}
            <tr>
              <td className="p-2">Net Metering Liaisoning Cost</td>
              <td className="p-2">
                <input
                  name="netMeteringLiaisoningCost"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.netMeteringLiaisoningCost}
                  onChange={handleInputChange}
                  placeholder="Enter Cost"
                />
              </td>
              <td className="p-2">
                <select
                  name="taxSlabLiaisoningCost"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.taxSlabLiaisoningCost}
                  onChange={handleInputChange}
                >
                  <option value="">Select Tax Slab</option>
                  <option value="5%">5%</option>
                  <option value="12%">                  12%</option>
                  <option value="18%">18%</option>
                  <option value="28%">28%</option>
                </select>
              </td>
              <td></td>
            </tr>

            {/* Total Project Cost (Without Tax) */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Total Project Cost (exclusive of Tax)</td>
              <td className="p-2">
                <input
                  name="totalProjectCostWithoutTax"
                  type="text"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                  value={calculateTotalProjectCostWithoutTax()}
                  readOnly
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Tax Amount */}
            <tr>
              <td className="p-2">Tax</td>
              <td className="p-2">
                <input
                  name="taxAmount"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={calculateTaxAmount()}
                  readOnly
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Total Project Cost (With Tax) */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Total Project Cost (inclusive of Tax)</td>
              <td className="p-2">
                <input
                  name="totalProjectCostWithTax"
                  type="text"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                  value={calculateTotalProjectCostWithTax()}
                  readOnly
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Delivery Period */}
            <tr>
              <td className="p-2">Delivery Period (In Days)</td>
              <td className="p-2">
                <input
                  name="deliveryPeriod"
                  type="text"
                  className="border border-[#7A7A7A] p-2 w-full rounded-md"
                  value={formData.deliveryPeriod}
                  onChange={handleInputChange}
                  placeholder="Enter Days"
                />
              </td>
              <td></td>
              <td></td>
            </tr>

            {/* Scope of Maintenance Services */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Scope of Maintenance Services</td>
              <td className="p-2" colSpan="2">
                <textarea
                  name="scopeOfMaintenance"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                  value={formData.scopeOfMaintenance}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </td>
              <td></td>
            </tr>

            {/* Payment Terms */}
            <tr>
              <td className="p-2">Payment Terms</td>
              <td className="p-2" colSpan="2">
                <textarea
                  name="paymentTerms"
                  className="border border-[#7A7A7A] p-2 w-full h-20 rounded-md placeholder-[#7A7A7A] text-left resize-none"
                  value={formData.paymentTerms}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                />
              </td>
              <td></td>
            </tr>

            {/* Price Validity */}
            <tr className="bg-[#D4DCFF]">
              <td className="p-2">Price Validity (In Days)</td>
              <td className="p-2">
                <input
                  name="priceValidity"
                  type="text"
                  className="border border-[#7A7A7A] bg-[#D4DCFF] p-2 w-full rounded-md"
                  value={formData.priceValidity}
                  onChange={handleInputChange}
                  placeholder="Enter Days"
                />
              </td>
              <td></td>
              <td className="p-2">
                <p className="text-[14px] font-[500]">Minimum 30 Days</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Total Calculation Section */}
      <div className="p-3 border-t">
        <h4>Total Project Cost Without Tax: ₹{calculateTotalProjectCostWithoutTax()}</h4>
        <h4>Tax: ₹{calculateTaxAmount()}</h4>
        <h4>Total Project Cost With Tax: ₹{calculateTotalProjectCostWithTax()}</h4>
      </div>
    </div>
  );
};

export default Quotations3;



