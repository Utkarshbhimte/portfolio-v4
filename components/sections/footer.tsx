export const Footer: React.FC = () => {
  return (
    <div className="text-center text-gray-600 text-sm p-4 mt-8">
      © {new Date().getFullYear()} Utkarsh Bhimte ·{" "}
      <a href="https://github.com/utkarshbhimte/portfolio">
        Source
      </a>
    </div>
  );
};
