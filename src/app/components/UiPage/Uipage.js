'use client'
import Link from 'next/link'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Slider from "react-slick";
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Helooo from './Helooo';
const Uipage = () => {


    return (
        <div class="row gap-6 py-3 px-5 mx-0">
            <div class="col-lg-7 col-md-12">
                <div class="">
                    <div class="card-body">
                        <h1 class="card-title font-bold">Investment Plans</h1>
                        <p class="card-text fs-4 font-semibold">Build an Investment Plan from scratch, or select a Plan from our marketplace. <br /> Customize any Plan to meet your needs.</p>

                        <div className='my-5'> <Helooo /></div>


                        {/* button lagana hay */}


                        <div className='card w-100 mb-3'>
                            <div className='row d-flex px-1 py-2'>
                                <div className='col-lg-3 col-md-6 col-sm-12 px-3 py-4'>
                                    <p className='font-normal fs-6 text-sm pl-4'>Asset Type</p>
                                    <h4 className='font-bold fs-6 pl-4'>20 Sock</h4>
                                </div>
                                <div className='col-lg-3 col-md-6 col-sm-12 px-3 py-4'>
                                    <p className='font-normal fs-6 text-sm'>Top Holding</p>
                                    <div className='row d-flex'>
                                        <div className='col'>
                                            <p className='font-normal fs-6 text-sm'>ABBV <span className='font-normal fs-6 text-sm'>5%</span></p>
                                            <p className='font-normal fs-6 text-sm'>CVX <span className='font-normal fs-6 text-sm'>5%</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-3 col-md-6 col-sm-12 px-3 py-4'>
                                    <p className='font-normal fs-6 text-sm'></p>
                                    <div className='row d-flex py-3'>
                                        <div className='col'>
                                            <p className='font-normal fs-6 text-sm'>BMY <span className='font-normal fs-6 text-sm'>5%</span></p>
                                            <p className='font-normal fs-6 text-sm'>DUC <span className='font-normal fs-6 text-sm'>5%</span></p>
                                        </div>
                                    </div>

                                </div>

                                <div className='col-lg-3 col-md-6 col-sm-12 px-3 py-4'>
                                    <p className='font-normal fs-6 text-sm'></p>
                                    <div className='row d-flex py-3'>
                                        <div className='col'>
                                            <p className='font-normal fs-6 text-sm'>CSCO <span className='font-normal fs-6 text-sm'>5%</span></p>
                                            <p className='font-normal fs-6 text-sm'>GILD <span className='font-normal fs-6 text-sm'>5%</span></p>
                                        </div>
                                    </div>

                                </div>


                            </div>
                            <hr className='border-collapse mx-2' />

                            <Link className='text-center font-bold fs-6 text-sm text-decoration-none py-2 mb-2' href="#">View Plan </Link>
                        </div>


                        <div className='card w-100 mb-3 px-1 py-2'>
                            <h4 class="card-title font-bold pl-4 pt-4">The magnificant Seven</h4>
                            <p className='font-semibold fs-6 text-sm pl-4'>Top gainers of the Nasdaq 100 year-to-date by market cap</p>
                            <p className='font-semibold fs-6 text-sm pl-4'>72% Technology * 28% consumer</p>
                        </div>

                        <div className='card w-100 mb-3 px-1 py-2'>
                            <h4 class="card-title font-bold pl-4 pt-4">Artificial Intelligence</h4>
                            <p className='font-semibold fs-6 text-sm pl-4'>Provides exposure to companies driving innovation in artificial Intelligence.</p>
                            <p className='font-semibold fs-6 text-sm pl-4'>72% Technology * 28% consumer</p>
                        </div>



                    </div>
                </div>
            </div>




            <div class="col-lg-4 col-md-12">

                <div className='card w-100 mb-3 px-1 py-2' style={{ backgroundColor: "#e5eafd" }}>
                    <h4 class="card-title font-bold pl-4 pt-4" style={{ color: "#0000ff" }} >Build your own investment Plan</h4>
                    <p className='font-semibold fs-6 text-sm pl-4' style={{ color: "#0000ff" }} >Choose your custom set of assets, and automate <br /> daily, weekly, twice a month, or monthly investments.</p>
                    <p className='font-semibold fs-6 text-sm pl-4'>72% Technology * 28% consumer</p>
                </div>
                {/* <div className='card w-100 mb-3 px-1 py-2' style={{ backgroundColor: "#e5eafd" }}>
                    <h4 class="card-title font-bold pl-4 pt-4" style={{ color: "#0000ff" }} >Build your own investment Plan</h4>
                    <p className='font-semibold fs-6 text-sm pl-4' style={{ color: "#0000ff" }} >Choose your custom set of assets, and automate <br /> daily, weekly, twice a month, or monthly investments.</p>
                    <p className='font-semibold fs-6 text-sm pl-4'>72% Technology * 28% consumer</p>
                </div> */}

            </div>


        </div>
    )
}

export default Uipage