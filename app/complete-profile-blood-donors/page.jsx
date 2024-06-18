'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DonorsDetails from "../Components/DonorsDetails";
import HealthStatus from '../Components/HealthStatus';
import ProgressBar from "../Components/ProgressBar";

const MultiStepForm = () => {
  const [screen, setScreen] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    occupation: '',
    city: '',
    state: '',
    streetAddress: '',
    recentIllness: '',
    recentIllnessDetails: '',
    currentMedication: '',
    currentMedicationDetails: '',
    transfusionHistory: '',
    transfusionHistoryDetails: '',
    recentVaccinations: '',
    recentVaccinationsDetails: '',
    travelHistory: '',
    travelHistoryDetails: '',
    medicalHistory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const nextStep = () => {
    if (screen < 4) {
      setScreen(screen + 1);
    }
  };

  const previousStep = () => {
    if (screen > 1) {
      setScreen(screen - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl md:text-[32px] font-gilroy-medium mb-4 text-[#000000] lg:w-[598px] h-[38px]">
          Welcome, Please complete your profile
        </h1>
        <p className="text-sm py-4 md:text-[16px] py-0 font-helvetica text-gray-400 lg:w-[585px] h-[38px]">
          Complete your profile to get access to easy blood donation opportunities, manage your appointments, and track your impact on the community.
        </p>
      </div>
      <div className="mt-12 mb-12">
        <ProgressBar screen={screen} />
      </div>
      <form onSubmit={handleSubmit}>
        {screen === 1 && (
          <div className="lg:flex justify-between items-center mt-[70px]">
            <div className="w-full lg:pr-10">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300"
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300"
                  required
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer_not_to_say">Prefer not to say</option>
                </select>
              </div>
            </div>
            <div className="w-full">
              <div>
                <label className="block mb-2">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Street Address</label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300"
                  required
                />
              </div>
            </div>
          </div>
        )}
        {screen === 2 && (
          <div className="lg:flex justify-between mt-[70px]">
            <div className="w-full lg:mr-10">
              <div className=''>
                <label className="block">Have you had a recent illness or infection?</label>
                <div className='space-x-4 flex flex-grow justify-center'>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="recentIllness"
                      value="Yes"
                      checked={formData.recentIllness === "Yes"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    Yes
                  </label>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="recentIllness"
                      value="No"
                      checked={formData.recentIllness === "No"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    No
                  </label>
                </div>
                <textarea
                  name="recentIllnessDetails"
                  value={formData.recentIllnessDetails}
                  onChange={handleChange}
                  className="w-full h-full p-2 border border-gray-300 mt-2"
                  placeholder="If Yes, Please Specify Below"
                />
              </div>

              <div className=''>
                <label className="block mt-4">Are you on any current medication?</label>
                <div className='space-x-4 flex justify-center'>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="currentMedication"
                      value="Yes"
                      checked={formData.currentMedication === "Yes"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    Yes
                  </label>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="currentMedication"
                      value="No"
                      checked={formData.currentMedication === "No"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    No
                  </label>
                </div>
                <textarea
                  name="currentMedicationDetails"
                  value={formData.currentMedicationDetails}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 mt-2"
                  placeholder="If Yes, Please Specify Below"
                />
              </div>

              <div className=''>
                <label className="block mt-4">Any history of Blood Transfusions or Organ Transplants?</label>
                <div className='space-x-4 flex justify-center'>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="transfusionHistory"
                      value="Yes"
                      checked={formData.transfusionHistory === "Yes"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    Yes
                  </label>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="transfusionHistory"
                      value="No"
                      checked={formData.transfusionHistory === "No"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    No
                  </label>
                </div>
                <textarea
                  name="transfusionHistoryDetails"
                  value={formData.transfusionHistoryDetails}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 mt-2"
                  placeholder="If Yes, Please Specify Below"
                />
              </div>
            </div>
            <div className="w-full">
              <div className=''>
                <label className="block">Any recent vaccinations?</label>
                <div className='space-x-4 flex justify-center' >
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="recentVaccinations"
                      value="Yes"
                      checked={formData.recentVaccinations === "Yes"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    Yes
                  </label>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="recentVaccinations"
                      value="No"
                      checked={formData.recentVaccinations === "No"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    No
                  </label>
                </div>
                <textarea
                  name="recentVaccinationsDetails"
                  value={formData.recentVaccinationsDetails}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 mt-2"
                  placeholder="If Yes, Please Specify Below"
                />
              </div>

              <div className=''>
                <label className="block">Any recent travel history?</label>
                <div className='space-x-4 flex justify-center'>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="travelHistory"
                      value="Yes"
                      checked={formData.travelHistory === "Yes"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    Yes
                  </label>
                  <label className='bg-red-200 text-white text-center py-3 px-12 w-full my-7 cursor-pointer'>
                    <input
                      type="radio"
                      name="travelHistory"
                      value="No"
                      checked={formData.travelHistory === "No"}
                      onChange={handleChange}
                      className='hidden'
                    />
                    No
                  </label>
                </div>
                <textarea
                  name="travelHistoryDetails"
                  value={formData.travelHistoryDetails}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 mt-2"
                  placeholder="If Yes, Please Specify Below"
                />
              </div>

              <div className='space-y-4'>
                <label className="block mb-2">Any other medical history we should know about?</label>
                <textarea
                  name="medicalHistory"
                  value={formData.medicalHistory}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 mt-2"
                  placeholder="Please Specify Below"
                />
              </div>
            </div>
          </div>
        )}
        {screen === 3 && (
          <div className="lg:flex justify-between items-center mt-[70px]">
          <div className="w-full lg:pr-10">
            <div className='space-y-4'>
              <label className="block mb-2">Have you had a recent illness or infection?</label>
              <div className='space-x-4'>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="recentIllness"
                    value="Yes"
                    checked={formData.recentIllness === "Yes"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  Yes
                </label>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="recentIllness"
                    value="No"
                    checked={formData.recentIllness === "No"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  No
                </label>
              </div>
              <textarea
                name="recentIllnessDetails"
                value={formData.recentIllnessDetails}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 mt-2"
                placeholder="If Yes, Please Specify Below"
              />
            </div>

            <div className='space-y-4'>
              <label className="block mb-2">Are you on any current medication?</label>
              <div className='space-x-4'>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="currentMedication"
                    value="Yes"
                    checked={formData.currentMedication === "Yes"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  Yes
                </label>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="currentMedication"
                    value="No"
                    checked={formData.currentMedication === "No"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  No
                </label>
              </div>
              <textarea
                name="currentMedicationDetails"
                value={formData.currentMedicationDetails}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 mt-2"
                placeholder="If Yes, Please Specify Below"
              />
            </div>

            <div className='space-y-4'>
              <label className="block mb-2">Any history of Blood Transfusions or Organ Transplants?</label>
              <div className='space-x-4'>
                <label className='bg-red-200 text-white py-3 px-12 w-1/2 my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="transfusionHistory"
                    value="Yes"
                    checked={formData.transfusionHistory === "Yes"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  Yes
                </label>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="transfusionHistory"
                    value="No"
                    checked={formData.transfusionHistory === "No"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  No
                </label>
              </div>
              <textarea
                name="transfusionHistoryDetails"
                value={formData.transfusionHistoryDetails}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 mt-2"
                placeholder="If Yes, Please Specify Below"
              />
            </div>
          </div>
          <div className="w-full">
            <div className='space-y-4'>
              <label className="block mb-2">Any recent vaccinations?</label>
              <div className='space-x-4'>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="recentVaccinations"
                    value="Yes"
                    checked={formData.recentVaccinations === "Yes"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  Yes
                </label>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="recentVaccinations"
                    value="No"
                    checked={formData.recentVaccinations === "No"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  No
                </label>
              </div>
              <textarea
                name="recentVaccinationsDetails"
                value={formData.recentVaccinationsDetails}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 mt-2"
                placeholder="If Yes, Please Specify Below"
              />
            </div>

            <div className='space-y-4'>
              <label className="block mb-2">Any recent travel history?</label>
              <div className='space-x-4'>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="travelHistory"
                    value="Yes"
                    checked={formData.travelHistory === "Yes"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  Yes
                </label>
                <label className='bg-red-200 text-white py-3 px-12 w-full my-7 cursor-pointer'>
                  <input
                    type="radio"
                    name="travelHistory"
                    value="No"
                    checked={formData.travelHistory === "No"}
                    onChange={handleChange}
                    className='hidden'
                  />
                  No
                </label>
              </div>
              <textarea
                name="travelHistoryDetails"
                value={formData.travelHistoryDetails}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 mt-2"
                placeholder="If Yes, Please Specify Below"
              />
            </div>

            <div className='space-y-4'>
              <label className="block mb-2">Any other medical history we should know about?</label>
              <textarea
                name="medicalHistory"
                value={formData.medicalHistory}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 mt-2"
                placeholder="Please Specify Below"
              />
            </div>
          </div>
        </div>
        )}
        <div className="flex justify-between mt-4">
          <button
            type="button"
            onClick={previousStep}
            className="py-2 px-4 bg-gray-200 text-black border border-gray-300 rounded"
            disabled={screen === 1}
          >
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="py-2 px-4 bg-red-500 text-white rounded"
            disabled={screen === 3}
          >
            Next
          </button>
          {screen === 3 && (
            <button
              type="submit"
              className="py-2 px-4 bg-green-500 text-white rounded"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
