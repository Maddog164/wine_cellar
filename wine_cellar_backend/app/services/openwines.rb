module Openwines
    class Search
        # def self.with_info()
        def self
            Faraday.get 'https://api.wine-searcher.com/x?api_key=dnshedrs20210721&winename=petrus&vintage=2011'
            # Faraday.get 'https://api.wine-searcher.com/x?' + ENV['API_KEY'] + '&winename=petrus&vintage=2011'
        end
    end
end
