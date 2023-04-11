
// const DownloadButton = () => {
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch('http://localhost:3000/python');
//       const data = await response.blob();
//       const downloadUrl = window.URL.createObjectURL(data);
//       const link = document.createElement('a');
//       link.href = downloadUrl;
//       link.download = 'Pdfs/python.pdf';
//       document.body.appendChild(link);
//       link.click();
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <button onClick={handleDownload} disabled={loading}>
//       {loading ? 'Loading...' : 'Download'}
//     </button>
//   );
// };

// export default DownloadButton;
