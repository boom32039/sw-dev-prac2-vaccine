import { dbConnect } from "@/db/dbConnect";
import getHospitals from "@/libs/getHospitals";
import Hospital from "@/db/models/Hospital";
import getUserProfile from "@/libs/getUserProfile";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { revalidateTag } from "next/dist/server/web/spec-extension/revalidate-tag";
import { redirect } from "next/navigation";
import { TextField, Button, LinearProgress } from "@mui/material";
import { Suspense } from "react";
import HospitalCatalog from "./HospitalCatalog";
export default async function AddHospitalForm() {
	const hospitals = getHospitals()
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) 
	return (
        <main className="text-center p-5 h-full bg-stone-200 text-black">
            <h1 className="text-xl font-medium">Select Your Hospital</h1>
            {/* <CardPanel/> */}
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p>}>
                <HospitalCatalog hospitalJson={hospitals}/>
            </Suspense>
        </main>
    )
	const profile = await getUserProfile(session.user.token);
	if (profile.data.role != "admin") return <></>;

	const addHospital = async (AddHospitalForm: FormData) => {
		"use server";
		const name = AddHospitalForm.get("name");
		const address = AddHospitalForm.get("address");
		const district = AddHospitalForm.get("district");
		const province = AddHospitalForm.get("province");
		const postalcode = AddHospitalForm.get("postalcode");
		const tel = AddHospitalForm.get("tel");
		const picture = AddHospitalForm.get("picture");
		try {
			await dbConnect();
			const hospital = await Hospital.create({
				name: name,
				address: address,
				district: district,
				province: province,
				postalcode: postalcode,
				tel: tel,
				picture: picture
			});
		} catch (error) {
			console.log(error);
		}
		revalidateTag("hospitals");
		redirect("/hospital");
	};

	return (
		<form action={addHospital}>
			<div className="w-[100%] flex flex-col items-center">
				<div>Add Hospital</div>
				<div className="flex flex-col space-y-2 py-2">
				<input
						type="text"
						required
						name="name"
						id="name"
						autoComplete="name"
						className="w-[400px] bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
						placeholder="name"
					/>
					<input
						type="text"
						required
						name="address"
						id="address"
						autoComplete="address"
						className="w-[400px] bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
						placeholder="address"
					/>
					<input
						type="text"
						required
						name="district"
						id="district"
						autoComplete="district"
						className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
						placeholder="district"
					/>
					<input
						type="text"
						required
						name="province"
						id="province"
						autoComplete="province"
						className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
						placeholder="province"
					/>
					<input
						type="text"
						required
						name="postalcode"
						id="postalcode"
						autoComplete="postalcode"
						className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
						placeholder="postalcode"
					/>
					<input
						type="text"
						required
						name="tel"
						id="tel"
						autoComplete="tel"
						className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
						placeholder="tel"
					/>
					<input
						type="text"
						required
						name="picture"
						id="picture"
						autoComplete="picture"
						className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus:outline-none focus:border-blue-400"
						placeholder="URL"
					/>
					<Button type="submit">Add Hospital</Button>
				</div>
			</div>
		</form>
	);
}