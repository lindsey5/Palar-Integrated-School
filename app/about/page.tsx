import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function About() {
    return (
        <div>
        {/* Hero Section */}
        <HeroSection
            title="About Our School"
            subtitle="Building a legacy of excellence and character since our founding."
        />

        {/* Head of School Message */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 justify-center p-10">
            <div className="md:w-[40%] h-[60vh] relative">
            <Image
                src="/principal.jpg"
                alt="Principal"
                fill
                className="object-cover rounded-lg"
            />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-red-800 font-bold text-3xl mb-4">
                A Message from the Head of School
            </h1>
            <p className="text-gray-500 break-words leading-relaxed">
                "Welcome to Palar Integrated School! It is my privilege to lead this
                remarkable community of learners, educators, and families. Our
                commitment is to provide an enriching and supportive environment
                where every student is inspired to reach their full potential.
            </p>
            <p className="text-gray-500 break-words leading-relaxed mt-4">
                We blend time-honored traditions with innovative teaching to prepare
                our students for a rapidly changing world. I invite you to explore
                our website and visit our campus to see what makes our school such
                a special place."
            </p>
            </div>
        </div>

        {/* History Section */}
        <section className="bg-gray-50 py-20 px-5 md:px-20">
            <h2 className="text-red-800 text-3xl md:text-4xl font-bold text-center mb-12">
            History of Palar Integrated School
            </h2>

            <div className="max-w-5xl mx-auto space-y-6 text-gray-600 leading-relaxed">
            <p>
                Formerly known as Kapt. Eddie T. Reyes Memorial Elementary School-Palar
                Annex in Cluster IX of Taguig, it is located at Scorpion St. Palar Village,
                Barangay Pinagsama, Taguig City. It has a total land area of 2,100 square meters.
            </p>
            <p>
                This school was established in 2004 when the Taguig Administration met
                with various stakeholders such as Philip Morris Corporation and Philippine
                Business for Social Progress (PBSP) for school building donation at the
                Philippine Army Light Armor Regiment (PALAR) Village due to the public
                clamor for a school in the community of informal settlers.
            </p>
            <p>
                The only vacant portion left in the area then was a site formerly used
                as a target range by Army soldiers. The remains of which was a thick slab
                of concrete wall still visible at the rear portion of the school’s stage.
                This former target range was under the stewardship of the Rotary Community
                Corps (RCC), a voluntary organization who asked the Bases Conversion
                Development Authority (BCDA), which has title over the area, to use it as
                a garden under its LOVE Ecology Projects sponsored by the Rotary Club of
                Makati Greenbelt since 2001. The golden coconut tree, the only living
                remnant of the RCC’s LOVE Ecology Garden project, could still be seen at
                the school premises.
            </p>
            <p>
                The RCC lobbied AHHAI-FOMCRES not to oppose the building projects donation
                of PHILIP Morris and PBSP. Then, the construction of a two-classroom
                building was ensured near the barangay plaza. It turned out to be an
                annex of KERIS (once known as KERMES-Main), which catered 291 excess
                Grade I-Grade VI pupils of the aforementioned school. The school’s first
                administrator in 2004 was Mrs. Marina G. Evangelista, followed by Dr.
                Teodoro Melegrito as Officer-In-Charge.
            </p>
            <p>
                In mid-2004, the Fort Bonifacio Group of Companies under the auspices of
                the City and PBSP built a two-storey, six-classroom building. The Kinder-Grade
                V pupils utilized this building while the PHILIP Morris building was occupied
                by the Grade VI.
            </p>
            <p>
                In October 2006, Rep. Eulogio “Amang” Magsaysay of AVE Party List donated
                a multipurpose building which was used as the principal’s office, library,
                and computer room.
            </p>
            <p>
                During the administration of the late Mrs. Heddy B. Teneza, enrollment reached
                500 pupils, making it a complete elementary school at that time. The school
                had 8 classrooms: 2 from PHILIP Morris and 6 from the Fort Bonifacio Group of Companies.
            </p>
            <p>
                In 2011, Dr. Francia A. Patron took over the school administration. The
                construction of a three-storey, nine-classroom DepEd building led to the
                removal of the AVE building to solve classroom shortages due to rapid enrollment growth.
            </p>
            <p>
                Currently, Palar Integrated School is under the supervision of Dr. Magdalena
                G. Centeno. I Love Taguig constructed a four-storey, twelve-classroom
                building to accommodate the growing number of students.
            </p>
            <p>
                The school continuously demonstrates remarkable improvements in facilities,
                projects, and activities to deliver quality education. Now on its 13th year,
                Palar Integrated School has reached 2,900 pupils from Kinder to Grade VIII
                during the 2016-2017 school year, with 70 teachers and a Principal II at its helm.
            </p>
            </div>
        </section>
        </div>
    );
}
