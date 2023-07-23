Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :update, :destroy]
    end
  end
end

# getの時に勝手にに、indexとshowが作られる。だからエンドポイントでは書かなくていい
# モデルから、データベースからどうするかがget.

# createは新しい箱、スキーマーに沿ったものを作る。newで追加する。新しい箱を作る。createはnewとsaveを合わせたもの。