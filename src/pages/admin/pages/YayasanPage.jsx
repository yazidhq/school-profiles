import { FaEdit, FaEye } from "react-icons/fa";
import Section from "../../../components/admin/Section";
import { useYayasan } from "../../../context/YayasanContext";
import { useMouseClick } from "../../../hooks/useMouseEvent";
import LinkButton from "../../../components/admin/components/LinkButton";
import useTruncate from "../../../hooks/useTruncate";

const YayasanPage = () => {
  const { yayasan } = useYayasan();
  const [handleMouseClick, mouseEvent] = useMouseClick();
  const [truncateText] = useTruncate();

  return (
    <Section>
      <div className="d-flex justify-content-between mb-3">
        <div>
          <LinkButton>
            <FaEdit />
          </LinkButton>
        </div>
        <div>
          <h5 className="text-center">Tentang {yayasan.nama}</h5>
        </div>
        <div>
          <LinkButton>
            <FaEye />
          </LinkButton>
        </div>
      </div>
      <div>
        <p style={{ textAlign: "justify" }}>
          {truncateText(yayasan.tentang, 50)}
        </p>
      </div>
      <div className="mt-4">
        <h5 className="text-center mb-3">Sejarah {yayasan.nama}</h5>
        <p style={{ textAlign: "justify" }}>
          {truncateText(yayasan.tentang, 50)}
        </p>
      </div>
      <div className="row text-center mt-4">
        <div className="col-md-6">
          <h5>Visi</h5>
          <p>{yayasan.visi}</p>
        </div>
        <div className="col-md-6">
          <h5>Misi</h5>
          <p>{yayasan.misi}</p>
        </div>
      </div>
    </Section>
  );
};

export default YayasanPage;
