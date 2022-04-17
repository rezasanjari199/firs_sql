#!/bin/bash

ORDER=$1
ORDERTYPE=$2
NAME=$3



# create CLI
if [ $ORDER == 'create' -o $ORDER == 'c' ]
    then
        # create Entity
        if [ $ORDERTYPE == 'entity' -o $ORDERTYPE == 'e' ]
            then
                if [ $NAME ]
                    then
                        yarn typeorm entity:create -n $NAME.entity
                else
                    echo 'you need to specify name for entity'
                fi
        # create migration
        elif [ $ORDERTYPE == 'migration' -o $ORDERTYPE == 'm' ]
            then 
                if [ $NAME ]
                    then
                        yarn typeorm migration:create -n $NAME
                else
                    echo 'you need to specify name for migration'
                fi
        fi
fi


# generate CLI
if [ $ORDER == 'generate' -o $ORDER == 'g' ]
    then 
        if [ $ORDERTYPE == 'migration' -o $ORDERTYPE == 'm' ]
            then
                if [ $NAME ]
                    then
                        yarn build
                        yarn typeorm migration:generate -n $NAME
                else
                    echo 'you need to specify name for generating migration'
                fi
        fi
fi

# run migration
if [ $ORDER == 'run' -o $ORDER == 'r' ]
    then 
        yarn build
        yarn typeorm migration:run
fi