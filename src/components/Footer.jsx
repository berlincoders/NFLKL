const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Language Switcher Section */}
          <div className="languageSwitcher mb-6 md:mb-0">
            {/*   <div>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-500 transition duration-200">Español</button>
                 </div> */}
          </div>

          {/* Footer Navigation Section */}
          <div className="footer-navigation">
            <ul className="flex flex-col md:flex-row md:space-x-6">
              <li><a href="/help" className="text-sm hover:underline">Help</a></li>
              <li><a href="#" className="text-sm hover:underline">News</a></li>
              <li><a href="#" className="text-sm hover:underline">About us</a></li>
            </ul>
            <small className="block mt-4 text-center md:text-left text-xs">Disclaimer: None of the videos is hosted by this site. Streams hosted on external sites like Youtube and embedded here. This site is not responsible for the legality of the content. For legal issues, please contact appropriate media file owners/hosters. NFL and the NFL shield design are registered trademarks of the National Football League. The team names, logos and uniform designs are registered trademarks of the teams indicated. All other NFL-related trademarks are trademarks of the National Football League. All company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.™</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
