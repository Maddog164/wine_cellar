class UserSerializer<ActiveModel::Serializer

    attributes :id, :first_name, :last_name, :wines

    def wines
        object.wines.map do |wine|
            ::WineSerializer.new(wine).attributes
        end
    end


end