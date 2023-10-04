import {View, Text} from 'react-native'
import{useForm, Controller} from 'react-hook-form'
import { TextInput, Button } from 'react-native-paper';
export default function HomeScreen({navigation, route}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      iduser:"",
      fullName: "",
      email: "",
      password:"",
      uri:"",
      age:""
    },
  })
  const onSubmit = (data) => console.log(data);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenid@ {route.params.email}</Text>
        <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 12,
          minLength: 4
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Identificacion"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="iduser"
      />
      {errors.iduser ?.type == "required" && <Text style={{color : 'red'}}>Id es un Dato obligatorio.</Text>}
      {errors.iduser ?.type == "maxLength" && <Text style={{color: 'red'}}>La longitud debe ser hasta 30</Text>}
      {errors.iduser ?.type == "minlength" && <Text style={{color: 'red'}}>La longitud minima debe de ser 4</Text>}
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      <Button
                    style={{ marginTop: 20, backgroundColor: 'powder' }}
                    icon="content-save-check"
                    mode="outlined"
                    onPress={handleSubmit(onSubmit)}
                >
                    Guardar
                </Button>
      </View>
    );
        }