import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockHospitalJson = {
  success: true,
  count: 4,
  pagination: {},
  data: [
    {
      _id: "65218a7171d0464551f13df7",
      name: "Chulalongkorn Hospital",
      address: "1873 Rama IV Rd",
      district: "Pathum Wan",
      province: "Bangkok",
      postalcode: "10330",
      tel: "026494000",
      picture:"https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
      __v: 0,
      id: "65218a7171d0464551f13df7",
    },
    {
      _id: "65218aaa71d0464551f13dfa",
      name: "Rajavithi Hospital",
      address: "2 Phaya Thai Rd, Thung Phaya Thai",
      district: "Ratchathewi",
      province: "Bangkok",
      postalcode: "10400",
      tel: "022062900",
      picture:
        "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
      __v: 0,
      id: "65218aaa71d0464551f13dfa",
    },
    {
      _id: "65218adc71d0464551f13dfd",
      name: "Thammasat University Hospital",
      address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
      district: "Khlong Luang",
      province: "Pathum Thani",
      postalcode: "12120",
      tel: "029269999",
      picture: "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
      __v: 0,
      id: "65218adc71d0464551f13dfd",
    },
    {
      _id: "654800b7eebef2ee7662ef55",
      name: "Vajira Hospital",
      address: "681 Samsen Road",
      district: "Dusit",
      province: "Bangkok",
      postalcode: "10300",
      tel: "02-244-3000",
      picture: "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
      __v: 0,
      id: "654800b7eebef2ee7662ef55",
    },
  ],
};

describe("HospitalCatalog", () => {
  it("should have the correct number of hospital images", async () => {
    const hospitalCatalog = await HospitalCatalog({
      hospitalJson: mockHospitalJson,
    });
    render(hospitalCatalog);

    await waitFor(
        () => {
                const hospitalImages = screen.getAllByRole("img");
                expect(hospitalImages.length).toBe(mockHospitalJson.data.length);
        }
    );
  });
});