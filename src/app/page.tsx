
import Footer from '@/components/footer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      <div className="flex flex-col md:flex-row lg:px-20 md:px-2 sm:px-2">
        <div className="w-full md:w-1/2 pt-20">
          <h1 className="font-semibold text-4xl font-serif text-[#007E85] mt-5">
            Providing Quality Healthcare for a <br />
            Brighter and Healthy Future
          </h1>
          <p className='mt-5 text-xl font-serif'>
            At our hospital, we are dedicated to providing exceptional
            medical care to our patients and their families. Our
            experienced team of medical professionals, cutting-edge
            technology, and compassionate approach make us a leader
            in the healthcare industry.
          </p>
          <div className='flex  mt-20'>
            <button className='bg-[#007E85] py-2 px-5 rounded mr-5 font-medium text-white'>Appointments</button>
            <button>Watch Video</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <Image
            src="/image1.png"
            alt="A doctor holding a stethoscope indicating that they offer services 24/7 and an icon of their professionals"
            width={550}
            height={100}
            priority
          />
        </div>
      </div>
      <div className='bg-white shadow rounded font-serif mx-20 mb-4 px-4'>
        <h2 className='text-2xl font-bold font-serif'>Find a Doctor</h2>
        <div>
          <form className='grid grid-cols-4 py-3'>
            <div className=''>
              <label>Name</label> <br></br>
              <input type='text' className='py-3 px-12 border border-2 border-[#007E85] rounded' required />
            </div>
            <div className=''>
              <label>Specificity</label> <br></br>
              <input type='text' className='py-3 px-12 border border-2 border-[#007E85] rounded' required />
            </div>
            <div>
              <div className="flex py-8 px-8">
                <span className="mr-4 text-gray-700" id="toggle-label">Available</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    aria-labelledby="toggle-label"
                  />
                  <div
                    className="w-11 h-6 bg-gray-300 rounded-full peer-focus:ring-2 peer-focus:ring-[#007E85]
             peer-checked:bg-[#007E85] transition-colors"
                  ></div>
                  <div
                    className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transform transition-transform 
             peer-checked:translate-x-5"
                  ></div>
                </label>
              </div>
            </div>
            <div className='py-5'>
              <button className='bg-[#007E85] px-10 py-3 text-white rounded'>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className='mt-10 '>
        <h2 className='text-center text-4xl font-medium text-[#007E85] font-serif'>Our results in numbers</h2>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-20 mt-4'>
          <div>
            <p className='text-center'><span className='text-5xl text-[#007E85] font-extrabold'>99%</span> <br>
            </br>
              <span className='text-2xl font-bold'>Customer Satisfaction</span>
            </p>
          </div>
          <div>
            <p className='text-center'><span className='text-5xl text-[#007E85] font-extrabold'>15k</span> <br>
            </br>
              <span className='text-2xl font-bold'>Online Patients</span>
            </p>
          </div>
          <div>
            <p className='text-center'><span className='text-5xl text-[#007E85] font-extrabold'>12k</span> <br>
            </br>
              <span className='text-2xl font-bold'>Patients Recovered</span>
            </p>
          </div>
          <div>
            <p className='text-center'><span className='text-5xl text-[#007E85] font-extrabold'>240%</span> <br>
            </br>
              <span className='text-2xl font-bold'>Company Growth</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row lg:px-20 md:px-2 sm:px-2 mt-20 py-10">
        <div className="w-full md:w-1/2 pt-10">
          <h1 className="font-semibold text-4xl font-serif text-[#007E85]">
            You have lots of reasons to choose us
          </h1>
          <p className='mt-5 text-xl font-serif'>
            At our hospital, we are dedicated to providing exceptional
            medical care to our patients and their families. Our
            experienced team of medical professionals, cutting-edge
            technology, and compassionate approach make us a leader
            in the healthcare industry.
          </p>
          <div className='flex  mt-20'>
            <button className='bg-[#007E85] py-2 px-5 rounded mr-5 font-medium text-white'>GET STARTED</button>
            <button className='bg-white shadow rounded px-10'>TALK TO SALES</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
          <Image
            src="/image3.png"
            alt="A doctor holding a stethoscope indicating that they offer services 24/7 and an icon of their professionals"
            width={550}
            height={100}
            priority
          />
        </div>
      </div>

      <div>
        <h2 className='text-center text-4xl font-medium text-[#007E85] font-serif mb-3'>Services we provide</h2>
      </div>

      <div className='w-full lg:px-20 sm:px-10 md:px-10'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg w-full" src="/dental.png" alt="Dental" />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Dental Treatments</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                From routine check-ups to advanced treatments, we ensure your smile stays healthy and radiant.
              </p>
              
            </div>
          </div>

          <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg w-full" src="/dental.png" alt="Dental Machines shown" />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Orthopedic Solutions</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Expert care for bone health, injuries, and joint conditions to restore mobility and strength.
              </p>
              
            </div>
          </div>

          <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg w-full" src="/diago.png" alt="Advanced Diagnostics Machines" />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Advanced Diagnostics</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Cutting-edge technology to provide accurate diagnoses for effective treatment planning.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      <div className='w-full lg:px-20 sm:px-10 md:px-10 mt-5'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg w-full" src="/cardio.png" alt="Advanced Cardiology machines as well as speciliacits" />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Specialized Cardiology Services</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Dedicated heart care, including prevention, diagnosis, and treatment of cardiac conditions.
              </p>
              
            </div>
          </div>

          <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg w-full" src="/surgery.png" alt="A group of surgeons in a Surgery Room" />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Precision Surgery</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">Skilled surgical interventions tailored to your individual needs for optimal recovery.</p>
              
            </div>
          </div>

          <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
            <a href="#">
              <img className="rounded-t-lg w-full" src="/eyecare.png" alt="An Opened Eye possibly under treatment" />
            </a>
            <div className="p-4">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Complete Eye Care</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                Protect and enhance your vision with our comprehensive eye care services.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-center text-4xl font-medium text-[#007E85] font-serif mt-10'>Meet Our Team</h2>
      </div>
      <div className='w-full lg:px-20 sm:px-10 md:px-10 mt-5'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10 pt-5">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/person1.png" alt="Bonnie image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
              <span className="text-sm text-gray-800">Founder and CEO</span>
              <div className="flex mt-4 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 nodark:bg-blue-600 nodark:hover:bg-blue-700 nodark:focus:ring-blue-800">View Profile</a>
                <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 nodark:focus:ring-gray-700 nodark:bg-gray-800 nodark:text-gray-400 nodark:border-gray-600 nodark:hover:text-white nodark:hover:bg-gray-700">Message</a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10 pt-5">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/person1.png" alt="Bonnie image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Sophie Moore</h5>
              <span className="text-sm text-gray-800">Senior Doctor</span>
              <div className="flex mt-4 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 nodark:bg-blue-600 nodark:hover:bg-blue-700 nodark:focus:ring-blue-800">View Profile</a>
                <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 nodark:focus:ring-gray-700 nodark:bg-gray-800 nodark:text-gray-400 nodark:border-gray-600 nodark:hover:text-white nodark:hover:bg-gray-700">Message</a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex flex-col items-center pb-10 pt-5">
              <img className="w-24 h-24 my-3 rounded-full shadow-lg" src="/person1.png" alt="Bonnie image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Matt Cannon</h5>
              <span className="text-sm text-gray-800">Head of Pharmacy</span>
              <div className="flex mt-4 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 nodark:bg-blue-600 nodark:hover:bg-blue-700 nodark:focus:ring-blue-800">View Profile</a>
                <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 nodark:focus:ring-gray-700 nodark:bg-gray-800 nodark:text-gray-400 nodark:border-gray-600 nodark:hover:text-white nodark:hover:bg-gray-700">Message</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
