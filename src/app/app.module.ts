import {Router, RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StudentlistComponent} from "./components/studentlist/studentlist.component";
import {EmployeelistComponent} from "./components/employeelist/employeelist.component";
import {FormsModule} from "@angular/forms";
import {FruitComponent} from "./components/fruit/fruit.component";
import {CourseComponent} from "./components/course/course.component";
import {BookComponent} from "./components/book/book.component";
import {CityComponent} from "./components/city/city.component";
import {MovieComponent} from "./components/movie/movie.component";
import {CarComponent} from "./components/car/car.component";
import {ProductComponent} from "./components/product/product.component";
import {SubjectComponent} from "./components/subject/subject.component";
import {CountryComponent} from "./components/country/country.component";
import {SportComponent} from "./components/sport/sport.component";
import {VagetableComponent} from "./components/vagetable/vagetable.component";
import {AnimalComponent} from "./components/animal/animal.component";
import {ToolComponent} from "./components/tool/tool.component";
import {LaguageComponent} from "./components/laguage/laguage.component";
import {GameComponent} from "./components/game/game.component";
import {SoftwareComponent} from "./components/software/software.component";
import {PhoneComponent} from "./components/phone/phone.component";
import {MusicComponent} from "./components/music/music.component";
import {FoodComponent} from "./components/food/food.component";
import {GroceryComponent} from "./components/grocery/grocery.component";
import {ClassroomComponent} from "./components/classroom/classroom.component";
import {InventoryComponent} from "./components/inventory/inventory.component";
import {LectureComponent} from "./components/lecture/lecture.component";
import {StationeryComponent} from "./components/stationery/stationery.component";
import {FlowerComponent} from "./components/flower/flower.component";
import {DestinationComponent} from "./components/destination/destination.component";
import {LaptopComponent} from "./components/laptop/laptop.component";
import {LaptopspecificationsComponent} from "./components/laptopspecifications/laptopspecifications.component";
import {ComputerhardwareComponent} from "./components/computerhardware/computerhardware.component";
import {MobileappComponent} from "./components/mobileapp/mobileapp.component";
import {VideoComponent} from "./components/video/video.component";
import {TvshowComponent} from "./components/tvshow/tvshow.component";
import {FurnitureComponent} from "./components/furniture/furniture.component";
import {AccessoryComponent} from "./components/accessory/accessory.component";
import {BuildingComponent} from "./components/building/building.component";
import {PaintingComponent} from "./components/painting/painting.component";
import {ArtistComponent} from "./components/artist/artist.component";
import {ComposerComponent} from "./components/composer/composer.component";
import {PodcastComponent} from "./components/podcast/podcast.component";
import {ExerciseComponent} from "./components/exercise/exercise.component";
import {MealplanComponent} from "./components/mealplan/mealplan.component";
import {BudgetComponent} from "./components/budget/budget.component";
import {PresentationComponent} from "./components/presentation/presentation.component";
import {TourComponent} from "./components/tour/tour.component";
import {EventComponent} from "./components/event/event.component";
import {DeveloperComponent} from "./components/developer/developer.component";
import {FrameworkComponent} from "./components/framework/framework.component";
import {LibraryComponent} from "./components/library/library.component";


const  routes: Routes = [
  { path: '', component: StudentlistComponent},
  { path: 'employeelist', component: EmployeelistComponent},
  { path: 'fruit', component: FruitComponent},
  { path: 'course', component: CourseComponent},
  { path: 'book', component: BookComponent},
  { path: 'city', component: CityComponent},
  { path: 'movie', component: MovieComponent},
  { path: 'car', component: CarComponent},
  { path: 'product', component: ProductComponent},
  { path: 'subject', component: SubjectComponent},
  { path: 'country', component: CountryComponent},
  { path: 'sport', component: SportComponent},
  { path: 'vagetable', component: VagetableComponent},
  { path: 'animal', component: AnimalComponent},
  { path: 'tool', component: ToolComponent},
  { path: 'laguage', component: LaguageComponent},
  { path: 'game', component: GameComponent},
  { path: 'software', component: SoftwareComponent},
  { path: 'phone', component: PhoneComponent},
  { path: 'music', component: MusicComponent},
  { path: 'food', component: FoodComponent},
  { path: 'grocery', component: GroceryComponent},
  { path: 'classroom', component: ClassroomComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'lecture', component: LectureComponent},
  { path: 'stationery', component: StationeryComponent},
  { path: 'flower', component: FlowerComponent},
  { path: 'destination', component: DestinationComponent},
  { path: 'laptop', component: LaptopComponent},
  { path: 'laptopspecifications', component: LaptopspecificationsComponent},
  { path: 'computerhardware', component: ComputerhardwareComponent},
  { path: 'mobileapp', component: MobileappComponent},
  { path: 'video', component: VideoComponent},
  { path: 'tvshow', component: TvshowComponent},
  { path: 'furniture', component: FurnitureComponent},
  { path: 'accessory', component: AccessoryComponent},
  { path: 'building', component: BuildingComponent},
  { path: 'painting', component: PaintingComponent},
  { path: 'artist', component: ArtistComponent},
  { path: 'composer', component: ComposerComponent},
  { path: 'podcast', component: PodcastComponent},
  { path: 'exercise', component: ExerciseComponent},
  { path: 'mealplan', component: MealplanComponent},
  { path: 'budget', component: BudgetComponent},
  { path: 'presentation', component: PresentationComponent},
  { path: 'tour', component: TourComponent},
  { path: 'event', component: EventComponent},
  { path: 'developer', component: DeveloperComponent},
  { path: 'framework', component: FrameworkComponent},
  { path: 'library', component: LibraryComponent},
]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],
  declarations: [
    AppComponent,
    StudentlistComponent,
    EmployeelistComponent,
    FruitComponent,
    CourseComponent,
    BookComponent,
    CityComponent,
    MovieComponent,
    CarComponent,
    ProductComponent,
    SubjectComponent,


    CountryComponent,
    SportComponent,
    VagetableComponent,
    AnimalComponent,
    ToolComponent,
    LaguageComponent,
    GameComponent,
    SoftwareComponent,
    PhoneComponent,
    MusicComponent,

    FoodComponent,
    GroceryComponent,
    ClassroomComponent,
    InventoryComponent,
    LectureComponent,
    StationeryComponent,
    FlowerComponent,
    DestinationComponent,
    LaptopComponent,
    LaptopspecificationsComponent,


    ComputerhardwareComponent,
    MobileappComponent,
    VideoComponent,
    TvshowComponent,
    FurnitureComponent,
    AccessoryComponent,
    BuildingComponent,
    PaintingComponent,
    ArtistComponent,
    ComposerComponent,



    PodcastComponent,
    ExerciseComponent,
    MealplanComponent,
    BudgetComponent,
    PresentationComponent,
    TourComponent,
    EventComponent,
    DeveloperComponent,
    FrameworkComponent,
    LibraryComponent,


  ],
  providers: [

  ],

  bootstrap: [
    AppComponent,


  ],

})

export class AppModule { }

