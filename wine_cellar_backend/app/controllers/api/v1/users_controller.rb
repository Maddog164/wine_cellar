# require './config/environment'
# require './app/models/user'

class Api::V1::UsersController < ApplicationController

    # def new
    # end

    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find_by(:id => params[:id].to_i)
        render json: UserSerializer.new(@usere).to_serialized_json
    end

    def create
        binding.pry
        if User.find_by(:name => user_params[:name])
            @user = User.find_by(:name => wine_params[:name])
            ender json: UserSerializer.new(@user).to_serialized_json
        else
            @user = User.create(user_params)
            render json: UserSerializer.new(@user).to_serialized_json
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation)
    end
end
