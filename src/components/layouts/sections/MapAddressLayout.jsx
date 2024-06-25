import MapContainer from "../../container/MapContainer";
import Section from "../../container/Section";
import GMaps from "../../ui/GMaps";
import Heading from "../../ui/heading/Heading";

const MapAddressLayout = () => {
  return (
    <Section color={"light"}>
      <div className="col-5">
        <Heading
          text={"Kunjungi Kami"}
          color={"dark border-bottom border-2 border-dark pb-3"}
          size={"1"}
        />
      </div>
      <div className="row pt-4">
        <div className="col-lg-6">
          <MapContainer school={"Al-Hikmah Tirtamulya"}>
            <GMaps
              source={
                "https://www.google.com/maps/embed/v1/place?q=Jl,+Raya+Pasir+Malang,+RT.001/RW.02,+Citarik,+Kec.+Tirtamulya,+Karawang,+Jawa+Barat+41372&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              }
            />
          </MapContainer>
        </div>
        <div className="col-lg-6">
          <MapContainer school={"Al-Hikmah Dawuan"}>
            <GMaps
              source={
                "https://www.google.com/maps/embed/v1/place?q=Jl.+Jendral+Ahmad+Yani+No.+18+Dawuan+Tengah+Cikampek,+Kab.+Karawang&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              }
            />
          </MapContainer>
        </div>
      </div>
    </Section>
  );
};

export default MapAddressLayout;
